import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();
console.log("DAVID")
// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort
//--------------------------------------------
//  export let getStudentsInCohort = (cohort) => {
//  let specCohort = useStudents.cohort.filter(b => cohort === cohort)
//  if (b = true){
//  return specCohort}
//  }
//--------------------------------------------
// export let getStudentsInCohort = useStudents.filter(function (e){
// })
//----------------------------------------------
//debugger
//let specCohortArray = [];
//for(let index=0; index < students.length; index++)
//---------------------------------------------
export const getStudentsInCohort = (cohort) => {
    const filteredStudents = students.filter(studentObj => studentObj.cohort === cohort)
    return filteredStudents
}
console.log(getStudentsInCohort(43))

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students
export const getFullTimeStudents = () => {
    const filteredStudents = students.filter(studentObj => studentObj.fullTime === true)
    return filteredStudents
}
// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor
export const getStudentsByInstructorId = (instructorId) => {
    const filteredStudents = students.filter(studentObj => studentObj.instructorId === instructorId)
    return filteredStudents
}
// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned
export const getPolyglotStudents = (languageCount) => {
    const filteredStudents = students.filter(studentObj => studentObj.languages.length >= languageCount)
    return filteredStudents
}
console.log(getPolyglotStudents(2))

// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students
export const getAvailableInstructors = () => {
    let studentArray = useStudents().map(item =>{
        return item.instructorId;
    })
    return useInstructors().filter(item =>{
        if (studentArray.includes(item.id) === false){
            return item;
        }
    })
} 
console.log("getAvailableInstructors test:")
console.log(getAvailableInstructors())

// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method
export const getStudentsByLanguage = () => {
    
}
/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
