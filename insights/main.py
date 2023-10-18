import os
import pathlib
from langchain.embeddings import HuggingFaceEmbeddings
from dotenv import load_dotenv
from langchain.vectorstores import Milvus
from src.utils.app_util import get_bam_creds
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
        connection_args={"host": milvus_host, "port": milvus_port}
    )

    retriever = vectordb.as_retriever(
        search_type="mmr", search_kwargs={"k": 5})
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm, chain_type="stuff", retriever=retriever, return_source_documents=True,
        # chain_type_kwargs = {"prompt": PROMPT}
    )
    result = qa_chain(
        {"query": "What is the water consumption in goa in litres?"})
    print(result['result'])


main()
