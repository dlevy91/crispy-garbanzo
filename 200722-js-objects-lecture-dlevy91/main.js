//Sanity Check
console.log('hey there');

// // - Define an object called `primaryInstructor` with properties `name`, `experience`, and `responsibility` using object literal notation
let primaryInstructor = {
    name: "Kevin",
    experience: 15,
    responsibility: "Curriculum"
}
// console.log(primaryInstructor);

// // - Print each property of `primaryInstructor` individually using dot notation
// console.log(`The instructors name is ${primaryInstructor.name}.`);
// console.log(`The instructors experience is ${primaryInstructor.experience} years.`);
// console.log(`The instructors responsibility is ${primaryInstructor.responsibility}.`);

// - Create a function that is passed an instructor object and prints each property using template strings
// function printInstructor(instructor) {
//     console.log(`Name : ${instructor.name}.`);
//     console.log(`Experience : ${instructor.experience} years.`);
//     console.log(`Responsibility : ${instructor.responsibility}.`);
// }
// printInstructor(primaryInstructor);

// refactor function to use one console log
function printInstructor(instructor) {
    console.log(`Name : ${instructor.name}\nExperience : ${instructor.experience}\nResponsibility : ${instructor.responsibility}.`);
}
// printInstructor(primaryInstructor);

//- Create two more instructor objects : `secondaryInstructor` and `alumniInstructor` with properties `name`, `experience`, and `responsibility`
//secondaryInstructor = Autumn, 2, grading and supplemental Material
//alumniInstructor = Kenn, 10, Alumni Engagement

let secondaryInstructor = {
    name: "Autumn",
    experience: 2,
    responsibility: "Grading and Supplemental Material"
}
let alumniInstructor = {
    name: "Kenn",
    experience: 10,
    responsibility: "Alumni Engagement"
}

// printInstructor(secondaryInstructor);
// printInstructor(alumniInstructor);

let instructors = [primaryInstructor, secondaryInstructor, alumniInstructor];
//- Use a for loop to print the properties of each object in the array formatted using template strings
for (i = 0; i < instructors.length; i++) {
    // console.log(`Name : ${instructors[i].name}\nExperience : ${instructors[i].experience}\nResponsibility : ${instructors[i].responsibility}`);
    printInstructor(instructors[i]);
}
// - Print the number of instructors total
console.log(`The total number of instructors is ${instructors.length}`);

// - Print the number of instructors with over 5 years of experience
let XP = 0;// counter for instructors with XP
//iterate throught the array
for(let i = 0; i< instructors.length; i++){
    //if the value of the experience property of my instructor object is greater than 5
    if(instructors[i].experience > 5){
        // increase xp by 1
        XP++
    }
}
console.log(`The total number of instructors with over 5 years of experience is ${XP}`);