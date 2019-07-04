import postgraphile from 'postgraphile';
import { connectionString } from './db-connection';
import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector';
import { JWT_SECRET } from './jwt';
import PgConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';

export const pgMiddleware = postgraphile(connectionString, 'db_public', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    pgDefaultRole: 'postgres',
    jwtPgTypeIdentifier: 'db_private.jwt_token',
    ownerConnectionString: connectionString,
    jwtSecret: JWT_SECRET,
    exportGqlSchemaPath: 'src/utils/gql/api.gql',
    dynamicJson: true,
    appendPlugins: [PgSimplifyInflectorPlugin, PgConnectionFilterPlugin],
});
