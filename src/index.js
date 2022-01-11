const express = require('express');
const app = express();
const port = 8000
app.use(express.json());



// this array will be our database
const database = []
// COMMENT ON ALL LINES OF CODE!!!
/**
 * GET / list
 *  return entire todo list
 */
app.get("/list", function(req, res){
  console.log("get /list");
  res.send(database);
})

/**
 *
 * POST / list
 * item will be in the body of request
 */
app.post("/list", function(req, res){
  console.log("post /list");
  let input = req.body;
  console.log(input);
  database.push(input);
  res.json(database)

})


app.listen(port, function(){
  console.log("sever started on port", port);
})

/**
 * PUT / list/ : ID
 * this end point should replace  an item at the given position. 
 */
/**
 * delete / list
 * this end poin should delete the item at the give position. 
 */