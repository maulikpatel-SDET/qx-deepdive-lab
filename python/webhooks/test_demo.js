
const crypto = require('crypto');

// Secret key and message
const secret_key = Buffer.from('my_secret_key', 'utf8');
const message = Buffer.from('Hello, world!', 'utf8');

// HMAC-SHA1
const signature_sha1 = crypto
  .createHmac('sha1', secret_key)
  .update(message)
  .digest('hex');

// HMAC-SHA256
const signature_sha256 = crypto
  .createHmac('sha256', secret_key)
  .update(message)
  .digest('hex');

console.log('SHA-1 signature:', signature_sha1);
console.log('SHA-256 signature:', signature_sha256);



const crypto = require('crypto');

// Secret key and message
const secret_key = Buffer.from('my_secret_key', 'utf8');
const message = Buffer.from('Hello, world!', 'utf8');

// HMAC-SHA1
const signature_sha1 = crypto.createHmac('sha1', secret_key).update(message).digest('hex');

// HMAC-SHA256
const signature_sha256 = crypto.createHmac('sha256', secret_key).update(message).digest('hex');

console.log('SHA-1 signature:', signature_sha1);
console.log('SHA-256 signature:', signature_sha256);


