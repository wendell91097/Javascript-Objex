// index.html has its script set to this file by default

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function display_favorite_foods(person){
    for(let i = 0; i < Object.keys(person).length; i++){
        if (typeof person[Object.keys(person)[i]][0] === "object") {
            console.log(`${Object.keys(person)[i]}`)
            for(let key in person[Object.keys(person)[i]][0]) {
                console.log(`${key}: ${person[Object.keys(person)[i]][0][key]}`)
            }
        } else {
            console.log(`${Object.keys(person)[i]}: ${Object.values(person)[i]}`)
        }
    }
    // Shoutout to Shay for helping me get this one!
}


display_favorite_foods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    printInfo() {
        setTimeout(() => {console.log('Name: ' + this.name + '\n Age: ' +this.age), 100})
    }
    
    

    birthday() {
        setTimeout(() => {
            this.age++
            console.log('Happy birthday, you are ' + this.age +'!'), 100})
    }
    birthday2(new_age) {
        setTimeout(() => {
            new_age++
            this.age = new_age
            console.log('Happy birthday, you are ' + new_age +'!'), 100})
    }
}


// Create our Person Prototype

let wen = new Person('Wen', 25)
let max = new Person('Maximillian Age', 24)

// Use an arrow to create the printInfo method

wen.printInfo()
wen.birthday()
wen.birthday()
wen.birthday()
 

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

wen.birthday2(25)
wen.printInfo()
max.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (word) => {
    return new Promise( (resolve, reject) => {
        if(word.length > 10){
            resolve(word)
        } else {
            reject(word)
        }
    })
}

isBigWord('Evangelion II')

.then( (result) => {
    console.log(`Big Word`)
})
.catch((error)=> {
    console.log(`Small Number`)
})

isBigWord('Kadabra')

.then( (result) => {
    console.log(`Big Word`)
})
.catch((error)=> {
    console.log(`Small Number`)
})


