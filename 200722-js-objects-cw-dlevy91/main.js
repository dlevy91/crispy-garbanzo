//Sanity Check
console.log(`Hey Autumn :)`);
// //----------------------------------------------------------------------
//Exercise 1
//Defined objects and put information in them
let clubMember1 = {
    name: "Dani",
    clubRole: "President",
    contactEmail: "daniprez@email.com",
    contactPhone: "901-324-3454"
}
let clubMember2 = {
    name: "Carl",
    clubRole: "Vice President",
    contactEmail: "carlVP@email.com",
    contactPhone: "901-324-8766"
}
let clubMember3 = {
    name: "Lenny",
    clubRole: "Secretary",
    contactEmail: "lennySec@email.com",
    contactPhone: "901-787-2343"
}
let clubMember4 = {
    name: "Coco",
    clubRole: "Cat",
    contactEmail: "meowmeow@email.com",
    contactPhone: "901-348-9385"
}
//Used information from objects to create a function that would create a list printed in console
function memberPrint(member) {
    console.log(`Name: ${member.name}\nRole: ${member.clubRole}\ne-mail: ${member.contactEmail}\nPhone: ${member.contactPhone}`);
}

//Test for object and function sanity
memberPrint(clubMember3);

//Created array using objects created at the beginning 
let members = [clubMember1, clubMember2, clubMember3, clubMember4]
//Begining of output here
console.log(`Club Registry`);
//For loop running the array 0-3
for (i = 0; i < members.length; i++) {
    //Function printing the information from the objects in order of their place on the array
    memberPrint(members[i]);
}
console.log(`Number of members : ${members.length}`);
//End of output in console

// // //----------------------------------------------------------------------
// // Exercise 2
// // Create objects using input from exercise 2 question
let dog1 = {
    name: "Maggie",
    breed: "Basset Hound",
    age: "10 years",
    available: "True"
}
let dog2 = {
    name: "Blue",
    breed: "Beagle",
    age: "7 years",
    available: "False"
}
let dog3 = {
    name: "Luna",
    breed: "Terrier",
    age: "4 years",
    available: "True"
}
let dog4 = {
    name: "Harry",
    breed: "Shi-tzu",
    age: "17 years",
    available: "False"
}
//Sanity check on objects in console
// console.log(dog1);

function dogPrint(dog) {
    console.log(`Name: ${dog.name}\nBreed: ${dog.breed}\nAge: ${dog.age}\nAvaiable: ${dog.available}`);
}

//     dogPrint(dog1)
//Assemble objects into array
let dogs = [dog1, dog2, dog3, dog4];
console.log(`Adoption List`);
//set this to 0 for number of dogs available until if function checks if true
let dogsAvailable = 0
//Create for loop to show a dog if they are available or not
for (i = 0; i < dogs.length; i++) {
    //Inserted function to display to console
    dogPrint(dogs[i]);
    if (dogs[i].available == "True") {


        //use this to base if there are any available dogs based on true statement
        dogsAvailable++;
    }
}
//display number of available dogs
console.log(`Available dogs: ${dogsAvailable}`);
