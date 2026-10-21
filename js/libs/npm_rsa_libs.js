// R8-31 Popular npm crypto libraries not tested before: node-rsa, jsrsasign, elliptic.
const NodeRSA = require('node-rsa');
const { KEYUTIL, KJUR } = require('jsrsasign');
const EC = require('elliptic').ec;

const nr = new NodeRSA({ b: 1024 });                                // RSA-1024
nr.setOptions({ encryptionScheme: 'pkcs1' });

const kp = KEYUTIL.generateKeypair('RSA', 2048);                     // jsrsasign RSA-2048
const sig = new KJUR.crypto.Signature({ alg: 'SHA1withRSA' });
sig.init(kp.prvKeyObj);

const ec = new EC('secp256k1');                                      // elliptic secp256k1
const ecKey = ec.genKeyPair();

module.exports = { nr, sig, ecKey };
