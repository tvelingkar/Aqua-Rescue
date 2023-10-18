import os
import re
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


def get_numeric_value(str):
    return re.findall('\d+', str)[0]


def get_states():
    return ["Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Delhi",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal",
            "Andaman and Nicobar",
            "Chandigarh",
            "Jammu and Kashmir",
            "Puducherry"
            ]
