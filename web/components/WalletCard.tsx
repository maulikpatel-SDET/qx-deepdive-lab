// R8-32 (.tsx) crypto-js (AES passphrase mode, TripleDES, MD5) + @noble/curves secp256k1 in a React component.
import CryptoJS from 'crypto-js';
import { secp256k1 } from '@noble/curves/secp256k1';

export function WalletCard({ note }: { note: string }) {
  const enc = CryptoJS.AES.encrypt(note, 'test-only-passphrase').toString();   // passphrase -> EVP_BytesToKey (MD5)
  const des = CryptoJS.TripleDES.encrypt(note, 'test-only').toString();
  const id = CryptoJS.MD5(note).toString();
  const priv = secp256k1.utils.randomPrivateKey();
  const sig = secp256k1.sign(new Uint8Array(32), priv);
  return <div title={id}>{enc.length + des.length + sig.toCompactHex().length}</div>;
}
