import { createConnection } from 'typeorm';
import databaseConnectionOption from './database.config';

export const databaseProviders = [
  {
    provide: 'PROJ_DB_CONNECTION',
    useFactory: async () => await createConnection(databaseConnectionOption),
  },
];
