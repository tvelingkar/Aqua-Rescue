import os
import pathlib
from langchain.embeddings import HuggingFaceEmbeddings
from dotenv import load_dotenv
from langchain.vectorstores import Milvus
from src.utils.milvus_util import createCollection

PATH = pathlib.Path(__file__).parent.resolve()
DATA_DIR_PATH = str(PATH) + os.sep + "data"+ os.sep
load_dotenv()


def main():
    waterScarcityCollection=createCollection('state_ut_water_scarcity',DATA_DIR_PATH)
    groundWater=createCollection('state_ut_ground_water',DATA_DIR_PATH)
    waterConversationHarvesting=createCollection('state_ut_water_conservation_harvesting',DATA_DIR_PATH)

    waterScarcityCollection.load()

    # print(docs)

    print('Data added to Milvus Collection')
    # embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

    # vector_db = Milvus.from_documents(
    # docs,
    # embeddings,
    # connection_args={"host": "127.0.0.1", "port": "19530"},
    # )

    documents = waterScarcityCollection.search(data=[[1, 2]], anns_field="embedding", param={"metric":"IP","offset":0},
    output_fields=["number_of_quality_affected_habitations"], limit=1)

    print('documents')
    print(documents)




main()
