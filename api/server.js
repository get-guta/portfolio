const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());


app.get("/", (req, res)=>{

  res.send({"name": "Gela"})
})
app.listen(3000, ()=>{
  console.log("App listening on port 3000");
})