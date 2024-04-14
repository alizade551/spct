export default () => ({
  port: parseInt(process.env.PORT),
  authSecret: process.env.AUTH_SECRET,
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT),
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
});
