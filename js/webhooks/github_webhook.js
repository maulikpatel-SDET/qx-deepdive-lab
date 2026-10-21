// R8-28 Express webhook check: HMAC-SHA1 header (GitHub legacy), plain == compare; SHA-256 version as control.
const crypto = require('crypto');
const express = require('express');

const app = express();
const SECRET = 'test-only-secret';

app.post('/hook', express.raw({ type: '*/*' }), (req, res) => {
  const legacy = 'sha1=' + crypto.createHmac('sha1', SECRET).update(req.body).digest('hex');
  if (req.get('X-Hub-Signature') == legacy) return res.sendStatus(200);           // SHA-1 + non-constant-time compare
  const modern = 'sha256=' + crypto.createHmac('sha256', SECRET).update(req.body).digest('hex');
  const ok = crypto.timingSafeEqual(Buffer.from(modern), Buffer.from(req.get('X-Hub-Signature-256') || ''));
  return res.sendStatus(ok ? 200 : 401);
});

module.exports = app;
