"""R8-01 (a) Full dotted import, no alias: module used by its full path."""
import cryptography.hazmat.primitives.asymmetric.rsa

key = cryptography.hazmat.primitives.asymmetric.rsa.generate_private_key(public_exponent=65537, key_size=2048)
