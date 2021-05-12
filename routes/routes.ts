import express from 'express';
import Assignment from '../model/assignment';
import {assignments, pushAssignment, readAssignmentById, deleteAssignment, updateAssignment} from "../model/assignment-database"

const routes = express.Router();

routes.get('/', (req, res) => {
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
  let averagePercentage = (myScore/totalPossible)
  res.render('homepage', {assignments,averagePercentage});

});

routes.get("/add",(req,res)=>{
  res.render('add-assignment-form')
});

routes.post('/add', (req,res)=>{
  const assignment: Assignment ={
    name: req.body.name,
    score: parseInt(req.body.score),
    total: parseInt(req.body.total),
    completed: !!req.body.completed,

  };
  pushAssignment(assignment);
  res.render('assignment-result', {assignment})
});

routes.get('/delete', (req, res) => {
  const id = parseInt(req.query.id as string);
  const assignment = readAssignmentById(id)
  if (assignment) {
    deleteAssignment(id);
    res.render('delete-assignment-form', { name: assignment.name });
  } else {
    res.status(404)
  }
});
routes.get("/edit", (req,res)=>{
  const id:number = parseInt(req.query.id as string);
  const assignment = readAssignmentById(id);
  
  res.render("edit-assignment-form", {assignment})
});
//What is the url need to access /edit?id=3
routes.post("/edit", (req,res)=>{
  const assignment: Assignment ={
    id: parseInt(req.query.id as string),
    name: req.body.name,
    score: parseInt(req.body.score),
    total: parseInt(req.body.total),
    completed: !!req.body.completed,
  }
  if(updateAssignment(assignment)){
    res.render('edit-result', {assignment})
  }else {
  res.status(404);
  res.send("NOT FOund");
}
});









export default routes;