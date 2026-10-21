// R8-22 MongoDB client-side field-level encryption (Node): algorithms + a hardcoded local master key.
const { MongoClient, ClientEncryption } = require('mongodb');

const LOCAL_MASTER_KEY = Buffer.from('a'.repeat(96)); // 96-byte local KMS key hardcoded (TEST ONLY)

async function setup() {
  const client = new MongoClient('mongodb://localhost:27017');
  const enc = new ClientEncryption(client, {
    keyVaultNamespace: 'encryption.__keyVault',
    kmsProviders: { local: { key: LOCAL_MASTER_KEY } },
  });
  const dataKeyId = await enc.createDataKey('local');
  const ssn = await enc.encrypt('123-45-6789', { keyId: dataKeyId, algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic' });
  const note = await enc.encrypt('free text', { keyId: dataKeyId, algorithm: 'AEAD_AES_256_CBC_HMAC_SHA_512-Random' });
  return { ssn, note };
}

module.exports = { setup };
