// R8-11 .mjs ES module: named import renamed, 'node:' prefix.
import { generateKeyPairSync as makeKeys, sign as signData } from 'node:crypto';

const { privateKey } = makeKeys('rsa', { modulusLength: 2048 });
export const signature = signData('sha256', Buffer.from('order-1'), privateKey);
