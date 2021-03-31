import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)
export const getStudentById = (id) => {
    return students.find(studentObj => studentObj.id === id)
}
console.log("getStudentById test:")
console.log(getStudentById(1))
// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)
export const getInstructorById = (id) => {
    return instructors.find(instructorObj => instructorObj.id === id)
}
console.log("getInstructorById test:")
console.log(getInstructorById(1))
// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")
export const getStudentByLastName = (lastName) => {
    return students.find(studentObj => studentObj.lastName === lastName)
}
console.log("getStudentByLastName test:")
console.log(getStudentByLastName("Smith"))
// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")
export const getStudentByName = (fullName) => {
    return students.find(studentObj => studentObj.firstName + " " + studentObj.lastName === fullName)
}
console.log("getStudentByName test:")
console.log(getStudentByName("Summer Smith"))

// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long
export const getInstructorOfStudent = (studentId) => {
 //  console.log(students)
    let stud = students.find(studentObj => studentObj.id === studentId)
   // console.log(stud)
    let studentInstructor= stud.instructorId
    return instructors.find(instructorObj => instructorObj.id === studentInstructor )
}
console.log("getInstructorsOfStudents test:")
console.log(getInstructorOfStudent(4))

// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate
