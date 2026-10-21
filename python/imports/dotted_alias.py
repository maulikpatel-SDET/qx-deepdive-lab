"""R8-01 (b) Full dotted import with an alias."""
import cryptography.hazmat.primitives.asymmetric.ec as CURVES

key = CURVES.generate_private_key(CURVES.SECP384R1())
