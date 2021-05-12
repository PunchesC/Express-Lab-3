import Assignment from "./assignment"


export const assignments: Assignment[] = [

// Prepopulate some data
{ id: 1,name: "HW1", score: 45, total: 80 , completed:true },
{ id: 2,name: "HW2", score: 44, total: 90 , completed:false  },
{ id: 3,name: "HW3", score: 35, total: 60 , completed:true  },
{ id: 4,name: "HW4", score: 0, total: 100 , completed:false  },
]
let nextId = 5;
export const pushAssignment = (assignment: Assignment):void => {
  assignment.id = nextId;
  nextId ++;
  assignments.push(assignment);
}

//Another way to get assignments by a function
// export const displayAssignments = ():Assignment[] =>{
//   return assignments;
// }

export function readAssignmentById(id: number): Assignment|undefined {
  return assignments.find(hw => hw.id === id);
}

export function deleteAssignment(id: number): boolean {
  const index = assignments.findIndex(hw => hw.id === id);
  if (index == -1) {
    return false;
  } else {
    assignments.splice(index, 1);
    return true;
  }
}

export function updateAssignment(assignment: Assignment): boolean {
  const index = assignments.findIndex(p => p.id === assignment.id);
  if (index == -1) {
    return false;
  } else {
    assignments[index] = assignment;
    return true;
  }
}