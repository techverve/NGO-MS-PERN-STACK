const Pool = require("pg").Pool;

const pool = new Pool({
  user: "joy",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "ngo_db"
});

module.exports = pool;
