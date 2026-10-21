// R8-29 JWT verification mistakes: no algorithm allow-list, decode() trusted, RS256 + HS256 mixed.
import jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';

const PUBLIC_KEY = readFileSync('keys/rsa_public.pem', 'utf8');

export function verifyLoose(token: string) {
  return jwt.verify(token, PUBLIC_KEY);                                   // no 'algorithms' option
}

export function trustDecoded(token: string) {
  const claims = jwt.decode(token) as { role?: string } | null;          // signature never checked
  return claims?.role === 'admin';
}

export function mixed(token: string) {
  return jwt.verify(token, PUBLIC_KEY, { algorithms: ['RS256', 'HS256'] }); // key-confusion risk
}
