"""R8-02 Parent package imported; algorithm reached through an attribute chain."""
from cryptography.hazmat.primitives import asymmetric
from cryptography.hazmat import primitives

key = asymmetric.rsa.generate_private_key(public_exponent=65537, key_size=2048)
ec_key = primitives.asymmetric.ec.generate_private_key(primitives.asymmetric.ec.SECP256R1())
