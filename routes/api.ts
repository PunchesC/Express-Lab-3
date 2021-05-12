import express from 'express';
import {assignments} from "../model/assignment-database"

const routes = express.Router();

routes.get("/api/assignment",(req,res)=>{
  res.json(assignments)
  res.status(200);
});

routes.get("/api/summary", (req,res)=>{

  let myScore = 0;
  let totalPossible =0;
  
  
  for(let i=0; i<assignments.length; i++){
    if(assignments[i].completed==true){
    myScore +=assignments[i].score;
    console.log(i);
    // totalPossible +=assignments[i].total;
  }
  }
  for(let assignment of assignments){
    if(assignment.completed==true)
   totalPossible += assignment.total;
  }
  // res.json(assignments);
  let averagePercentage = (myScore/totalPossible)
  console.log(myScore);
  console.log(totalPossible);
  console.log(averagePercentage);
  
  res.json({averagePercentage,assignments});

});
export default routes;