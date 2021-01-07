// OBSOLETE KNEX FILE.

// var dotenv = require('dotenv');
// dotenv.config({ path: '../.env' });

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     migrations: { directory: '../data/migrations' },
//     seeds: { directory: '../data/seeds' },
//     pool: {
//       min: 2,
//       max: 10,
//       afterCreate: (conn, done) => {
//         conn.run('PRAGMA foreign_keys = ON', done);
//       },
//     },
//   },

//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     migrations: { directory: '../data/migrations' },
//     seeds: { directory: '../data/seeds' },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run('PRAGMA foreign_keys = ON', done);
//       },
//     },
//   },

//   test: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     migrations: { directory: '../data/migrations' },
//     seeds: { directory: '../data/seeds' },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run('PRAGMA foreign_keys = ON', done);
//       },
//     },
//   },
// };
