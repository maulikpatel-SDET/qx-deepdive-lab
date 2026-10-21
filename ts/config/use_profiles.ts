// R8-36 (use) Algorithm and size come only from algorithms.ts.
import { generateKeyPairSync } from 'crypto';
import jwt from 'jsonwebtoken';
import { KEY_PROFILES, SigAlg } from './algorithms';

const p = KEY_PROFILES.legacy;
export const legacyKeys = generateKeyPairSync(p.type, { modulusLength: p.modulusLength });
export const token = jwt.sign({ sub: 'u1' }, legacyKeys.privateKey, { algorithm: SigAlg.Legacy });
