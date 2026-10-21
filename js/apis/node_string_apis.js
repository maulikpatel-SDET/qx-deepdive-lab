// R8-25 Node crypto calls where the algorithm is only a string argument.
const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
const s1 = crypto.createSign('RSA-SHA256').update('x').sign(privateKey);
const s2 = crypto.createSign('sha1').update('x').sign(privateKey);
const enc = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, Buffer.from('pan'));
const ecb = crypto.createCipheriv('aes-128-ecb', Buffer.alloc(16), null);
const des3 = crypto.createCipheriv('des-ede3-cbc', Buffer.alloc(24), Buffer.alloc(8));
const md5 = crypto.createHash('md5').update('pw').digest('hex');
const hmac = crypto.createHmac('sha1', 'test-only').update('body').digest('hex');
const pbk = crypto.pbkdf2Sync('pw', 'salt', 1000, 32, 'sha1');
const ecdh = crypto.createECDH('secp256k1');
const dh = crypto.createDiffieHellman(1024);
const x = crypto.generateKeyPairSync('x25519');

module.exports = { s1, s2, enc, ecb, des3, md5, hmac, pbk, ecdh, dh, x };
