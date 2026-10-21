"""R8-03 Imports inside a function, inside an if-block and inside a class body."""
import os


def make_rsa():
    from cryptography.hazmat.primitives.asymmetric import rsa      # local import
    return rsa.generate_private_key(public_exponent=65537, key_size=2048)


if os.getenv("QX_EC", "1") == "1":
    from cryptography.hazmat.primitives.asymmetric import ec        # conditional import
    EC_KEY = ec.generate_private_key(ec.SECP256R1())


class Signer:
    from cryptography.hazmat.primitives.asymmetric import ed25519   # class-body import
    KEY = ed25519.Ed25519PrivateKey.generate()
