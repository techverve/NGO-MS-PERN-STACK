const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
app.use(cors());
app.use(express.json()); 
app.post("/members", async (req, res) => {
  try {
    const { name, number, email, address, aadhar, blood_grp, age, gender, e_id, mem_id, med_id,g_id, ngo } = req.body;
    const newTodo = await pool.query(
      "INSERT into Members (name, mobile_number, email_id, address, aadhar_number, blood_group, age, sex, e_id, mem_id, med_id,g_id, ngo_center) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
      [name, number, email, address, aadhar, blood_grp, age, gender, e_id, mem_id, med_id,g_id, ngo]
    );
  res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/members", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM Members");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/volunteers", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM Volunteers");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/doctors", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM Medical_Assistants WHERE Type='Doctor'");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/donors", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM Donor");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.delete("/members/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM Members WHERE Mem_ID = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
