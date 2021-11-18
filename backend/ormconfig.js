module.exports = 
  {
    "type": process.env.DB_CONNECTION,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username":  process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "entities": ["dist/**/**/*.entity{ .ts,.js}"],
    "synchronize": false,
    "migrations": ["dist/migrations/*{.ts,.js}"],
    "migrationsTableName": "migrations_history",
    "migrationsRun": true,
    "cli": {
      "migrationsDir": "migrations"
    }
  }