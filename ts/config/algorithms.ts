// R8-36 (definition) TS const enum + 'as const' config map.
export const enum SigAlg {
  Legacy = 'RS256',
  Mobile = 'ES256',
}

export const KEY_PROFILES = {
  legacy: { type: 'rsa', modulusLength: 1024 },
  mobile: { type: 'ec', namedCurve: 'P-256' },
} as const;
