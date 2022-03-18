import { config } from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

config();

const databaseConnectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  synchronize: true,
  entities: [__dirname + '/../**/**.entity{.ts,.js}'],
  migrations: [join(__dirname, '..', 'database/migrations/*.{ts,js}')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default databaseConnectionOptions;
