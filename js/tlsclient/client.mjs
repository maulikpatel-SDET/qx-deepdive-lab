// R8-30 (Node .mjs) tls.connect: certificate check off, TLS 1.0 minimum, weak cipher list.
import tls from 'node:tls';

const socket = tls.connect({
  host: 'partner.qx.example.com',
  port: 443,
  rejectUnauthorized: false,
  minVersion: 'TLSv1',
  ciphers: 'AES128-SHA:DES-CBC3-SHA',
});
export default socket;
