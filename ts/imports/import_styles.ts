// R8-13 TypeScript: namespace import, default import and dynamic import().
import * as nc from 'crypto';
import cryptoDefault from 'node:crypto';

export const rsaPair = nc.generateKeyPairSync('rsa', { modulusLength: 2048 });
export const ed = cryptoDefault.generateKeyPairSync('ed25519');

export async function lateKey() {
  const mod = await import('node:crypto');
  return mod.generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
}
