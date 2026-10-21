"""R8-04 (definition) The only place that names RSA."""
from cryptography.hazmat.primitives.asymmetric.rsa import generate_private_key as _gen


def new_key(bits: int = 2048):
    return _gen(public_exponent=65537, key_size=bits)
