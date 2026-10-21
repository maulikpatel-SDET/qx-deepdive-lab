// R8-21 Node ORMs / query builders: knex.raw, Sequelize fn/literal, Prisma $queryRaw.
import knex from 'knex';
import { Sequelize, fn, col, literal } from 'sequelize';
import { PrismaClient } from '@prisma/client';

const db = knex({ client: 'pg' });
const prisma = new PrismaClient();

export async function legacy(pw: string, email: string) {
  await db.raw("UPDATE users SET pw = crypt(?, gen_salt('md5'))", [pw]);
  await db.raw("SELECT encode(digest(?, 'sha1'), 'hex') AS h", [email]);
  const hashed = fn('MD5', col('password'));
  const enc = literal("AES_ENCRYPT(card_no, 'test-only-key')");
  await prisma.$queryRaw`SELECT pgp_sym_encrypt(${email}, 'pw', 'cipher-algo=3des')`;
  return { hashed, enc, Sequelize };
}
