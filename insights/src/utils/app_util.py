import os
from genai.model import Credentials as GenAiCredentials

def get_bam_creds():
    api_key = os.getenv("GENAI_KEY", None)
    api_url = os.getenv("GENAI_API", None)
    if api_key is None or api_url is None:
        print(
            "Either api_key or api_url is None. Please make sure your credentials are correct."
        )
    creds = GenAiCredentials(api_key, api_url)
    return creds
