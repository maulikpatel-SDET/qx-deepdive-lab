"""R8-22 MongoDB CSFLE in Python (pymongo): same algorithms, AWS KMS master key."""
from bson.codec_options import CodecOptions
from pymongo import MongoClient
from pymongo.encryption import Algorithm, ClientEncryption

kms = {"aws": {"accessKeyId": "AKIATESTONLY0000", "secretAccessKey": "test-only"}}
client = MongoClient()
ce = ClientEncryption(kms, "encryption.__keyVault", client, CodecOptions())
key_id = ce.create_data_key("aws", master_key={"region": "ap-south-1", "key": "arn:aws:kms:ap-south-1:000000000000:key/test"})
token = ce.encrypt("4111", Algorithm.AEAD_AES_256_CBC_HMAC_SHA_512_Deterministic, key_id=key_id)
