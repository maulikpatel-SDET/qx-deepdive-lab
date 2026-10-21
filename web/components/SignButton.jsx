// R8-14 React component (.jsx): WebCrypto RSA-PSS key + signing on click.
import React, { useState } from 'react';

export default function SignButton({ payload }) {
  const [sig, setSig] = useState(null);

  async function onClick() {
    const pair = await window.crypto.subtle.generateKey(
      { name: 'RSA-PSS', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
      false,
      ['sign', 'verify'],
    );
    const s = await window.crypto.subtle.sign({ name: 'RSA-PSS', saltLength: 32 }, pair.privateKey,
      new TextEncoder().encode(payload));
    setSig(new Uint8Array(s));
  }

  return <button onClick={onClick}>{sig ? 'Signed' : 'Sign'}</button>;
}
