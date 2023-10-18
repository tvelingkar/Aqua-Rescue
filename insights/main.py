import os
import pathlib
from langchain import PromptTemplate
from langchain.embeddings import HuggingFaceEmbeddings
from dotenv import load_dotenv
from langchain.vectorstores import Milvus
import pandas as pd
from src.utils.app_util import get_bam_creds, get_numeric_value, get_states
from src.utils.data_util import loadData
from langchain.chains import RetrievalQA
from dotenv import load_dotenv
from genai.schemas import GenerateParams
from genai.extensions.langchain import LangChainInterface


PATH = pathlib.Path(__file__).parent.resolve()
DATA_DIR_PATH = str(PATH) + os.sep + "data" + os.sep
load_dotenv()


def main():
    milvus_host = os.getenv("MILVUS_HOST", None)
    milvus_port = os.getenv("MILVUS_PORT", None)

    model_id = "google/flan-t5-xxl"

    creds = get_bam_creds()

    params = GenerateParams(
        decoding_method="greedy",
        max_new_tokens=1000,
        min_new_tokens=10,
        repetition_penalty=1.4)

    llm = LangChainInterface(
        model=model_id,
        credentials=creds,
        params=params,

    )

    docs = []
    docs.extend(loadData(DATA_DIR_PATH, 'state_ut_water_scarcity_original'))
    docs.extend(loadData(DATA_DIR_PATH, 'state_ut_ground_water_original'))
    docs.extend(
        loadData(DATA_DIR_PATH, 'state_ut_water_conservation_harvesting_original'))

    print('Data added to Milvus Collection')

    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    vectordb = Milvus.from_documents(
        docs,
        embeddings,
        connection_args={"host": milvus_host, "port": milvus_port},
        drop_old=True
    )

    prompt_template = """
    try to answer the question in 1 word and keep answer concise as possible. Don't add any random characters
    *********
    {context}
    *********
    
    {question}

    Helpful Answer:
    """
    PROMPT = PromptTemplate(
        template=prompt_template, input_variables=["context", "question"]
    )

    retriever = vectordb.as_retriever(
        search_type="mmr", search_kwargs={"k": 5})
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm, chain_type="stuff", retriever=retriever, return_source_documents=True,
        chain_type_kwargs={"prompt": PROMPT}
    )

    output = []
    states = get_states()

    for state in states:
        quest1 = "Is there water Scarcity in "+state
        result1 = qa_chain({"query": quest1})
        output1='no'
        if "yes" in result1['result'].lower(): 
            output1="yes"
            

        quest2 = "What is total water consumption in million litres for "+state
        result2 = qa_chain({"query": quest2})
        output2=get_numeric_value(result2['result'])


        output.append(
            {"state": state, "Water Scarcity": output1, "Water Consumption in million litres": output2})
        print('\n')
        print('\n')
        print(output)
        print('\n')
        print('\n')

    
    df=pd.DataFrame(output)
    df.to_excel(DATA_DIR_PATH+"output_by_watson_ai.xlsx", index=False)


main()
