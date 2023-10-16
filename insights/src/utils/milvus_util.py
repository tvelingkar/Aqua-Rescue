import os
import random
from pymilvus import (
    connections,
    utility,
    Collection,
)
import pandas as pd

index = {
    "index_type": "IVF_FLAT",
    "metric_type": "L2",
    "params": {"nlist": 128},
}

milvusHost = os.getenv("MILVUS_HOST", None)
milvusPort = os.getenv("MILVUS_PORT", None)

def createCollection(collectionName, docsDirPath):
    connections.connect(host=milvusHost, port=milvusPort)
    utility.drop_collection(collectionName)
    df = pd.read_excel(docsDirPath + collectionName+".xlsx")
    countRow = df[df.columns[0]].count()
    df["embedding"] = [[random.random() for _ in range(2)]
                       for _ in range(countRow)]

    collection, ins_res = Collection.construct_from_dataframe(
        collectionName,
        df,
        primary_field='state_ut',
        auto_id=False
    )
    collection.create_index("embedding", index)

    return collection
