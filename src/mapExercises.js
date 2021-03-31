import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentNames
// It should not accept any parameters`
// It should return an array of strings. Each string should be the full name of the student
export const getStudentNames = () => {
    return students.map(studentObj => studentObj.firstName + " " + studentObj.lastName)
}
console.log("getStudentNames test:")
console.log(getStudentNames())
// Export a function named StudentList
// It should not accept any parameters
// It should return a single HTMLString that contains a <div> element for every student that looks like the following:
// Ex:
/*
  <div>
    <h1>Summer Smith</h1>
    <h2>Cohort 43</h2>
  </div>
*/
export const StudentList = () => {
  let studentHTML = students.map(studentObj => (
    `
    <div>
      <h1>${studentObj.firstName} ${studentObj.lastName}</h1>
      <h2>Cohort: ${studentObj.cohort}</h2>
    </div>
    `
  ))
return studentHTML

}
console.log("StudentList test:")
console.log(StudentList())
