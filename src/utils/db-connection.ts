const ormConfig = require('./../../ormconfig.json');

export const connectionString = `postgres://${ormConfig.username}:${ormConfig.password}@${ormConfig.host}:${ormConfig.port}/${ormConfig.database}`;
