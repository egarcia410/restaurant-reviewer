module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/restaurants'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};