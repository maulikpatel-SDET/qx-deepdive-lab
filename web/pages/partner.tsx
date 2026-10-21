// R8-15 Next.js page (.tsx): imports a partner ECDSA P-384 public JWK and an AES-CBC key via globalThis.crypto.
import { useEffect, useState } from 'react';

const PARTNER_JWK: JsonWebKey = { kty: 'EC', crv: 'P-384', x: 'AAAA', y: 'BBBB', ext: true };

export default function PartnerPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    (async () => {
      await globalThis.crypto.subtle.importKey('jwk', PARTNER_JWK, { name: 'ECDSA', namedCurve: 'P-384' }, true, ['verify']);
      await globalThis.crypto.subtle.generateKey({ name: 'AES-CBC', length: 128 }, true, ['encrypt', 'decrypt']);
      setReady(true);
    })();
  }, []);
  return <main>{ready ? 'Partner key loaded' : 'Loading'}</main>;
}
