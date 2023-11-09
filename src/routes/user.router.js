//imports
const { Router } = require("express");
const { generateUser } = require("../utils/faker");

//instancia del router
const router = Router();

//crear usuarios faker y luego testear con artillery
router.get("/test/user", async (req, res) => {
  let users = []
  for(let i = 0; i< 100;i++){ 
    users.push(generateUser())
  }
  res.send({status: "success", payload: users})
});

//exports
module.exports = router;
