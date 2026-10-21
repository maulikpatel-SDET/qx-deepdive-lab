"""R8-05 Generator function stored in a variable / class attribute, called later."""
from cryptography.hazmat.primitives.asymmetric import ec, rsa

KEYGEN = rsa.generate_private_key            # reference, not a call


class Wallet:
    curve_factory = ec.generate_private_key  # reference as class attribute

    def new(self):
        return self.curve_factory(ec.SECP256K1())


legacy = KEYGEN(public_exponent=65537, key_size=2048)
