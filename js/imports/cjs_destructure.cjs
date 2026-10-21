// R8-12 .cjs CommonJS: destructuring with rename + property access on a renamed module.
const { generateKeyPairSync: gen } = require('node:crypto');
const nodeCrypto = require('crypto');

const ec = gen('ec', { namedCurve: 'secp256k1' });
const dsa = nodeCrypto.generateKeyPairSync('dsa', { modulusLength: 2048, divisorLength: 256 });
module.exports = { ec, dsa };
