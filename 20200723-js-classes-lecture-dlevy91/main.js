//Sanity Check
console.log(`Hey man`);
// Create a dog object literal
let dog = {
    name: "spot",
    breed: "sheltie",
    age:7,
    bark: function(){
        alert(`BARK!!!`);
    }
};

// //Print it out
// console.log(dog);

// dog.name = "Jack";

// //Use dot notation
// console.log(`The dog name is ${dog.name}\nThe dog breed is ${dog.breed}\nThe dog age is ${dog.age}`);

// dog.bark();

//What is a class?
class Dog {
    //constructor gets called first
    constructor(dogName, dogBreed, dogAge) {
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;
    }
    //Bark method
    bark(howManyTimes){
        // alert(`${this.name} just Barked!`);
        return `${this.name} just Barked ${howManyTimes} times!`;
    }

    //Getter
    getBreed(){
        return this.breed;
    };

    //Setter
    setBreed(newBreed){
        if (newBreed != ""){
        console.log(`Changing the breed....`);
        this.breed = newBreed;
        } else {
            console.log("Breed name passed in was empty!");
        }
    }
};

//create a dog instance
let = myDog = new Dog("Spike", "Beagle", 14);
let = myDog2 = new Dog("Maggie", "Basset Hound", 12);

// //print the dog instances
// console.log(myDog);
// console.log(myDog2);

// //print the name property
// console.log(`The dogs name is ${myDog2.name}`);

//Add dogs to an array
let dogList = [myDog, myDog2];
//Print the dogs in the list
// for (let i = 0; i < dogList.length; i++){
//     // console.log(dogList[i]);
//     console.log(`The dogs name is ${dogList[i].name}`);
// }
//  changing a property of a class instance
myDog.name = "Maggie";
myDog2.name = "Blue";
// console.log(myDog2);

// //call a class method for barking
// console.log(myDog.bark(3));
// alert(myDog2.bark(42));

////////////////////////////////////////////////////////////////////////
console.log(`${myDog.name} is a ${myDog.getBreed()}`);
myDog.setBreed("Basset Hound");
console.log(`${myDog.name} is a ${myDog.getBreed()}`);