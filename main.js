// Continued control flow discussion from previous doc


let day = new Date().getDay();

let literal_day = new Date().toString();

console.log(day)
console.log(literal_day)

day = 5

console.log(day)


// Switch case

switch(day){
    case 0:
        console.log('Go to church');
        break;
    case 1:
        console.log('Time to grind out some code baby')
        break;
    case 2:
        console.log('Debug that code baby')
        break;
    case 3:
        console.log('Read the documentation')
        break;
    case 4:
        console.log('Have GPT-4 and Copilot X do it')
        break;
    case 5:
        console.log('Submit that pull request baby!')
        break;
    case 6:
        console.log('Take it easy baby.....')
        break;
    default:
        console.log('You have entered the timeless void')
}

// Creation of objects in JavaScript

// Simple JS Object

let person = {
    name : 'Sam',
    age : 600,
    race: 'Vampire'
}

console.log(person['name'])

console.log(person.race)

let object = {
    who : 'me',
    you : 'too',
    gods : ['Jesus', 'Zeus', 'LilB'],
    nums : [1,2,3,4,5]
}

for(let i = 0; i < Object.keys(person).length; i++){
    console.log(Object.values(person)[i])
}

// List Values from an Object that are arrays

for(let i = 0; i < Object.keys(object).length; i++){
    if(Array.isArray(Object.values(object)[i])){
        console.log(Object.values(object)[i])
    }
}
// Create our own Object prototypes -- using ES5 method syntax

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year=year;

    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year} ${this.make} ${this.model} and has ${wheels} wheels and the color is ${color}`);

        return 'Returned Value'
    }
}

// Creating a new instance

let my_car = new Car('Ferrari','Fast1','2022')

console.log(my_car.printInfo(4, 'Gun Metal'))

class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo(){
        return `Name: ${this.name} \n Age: ${this.age} \n Gender: ${this.gender}`
    }
}

let waldo = new Human('Waldo', 42, 'Unknown')

console.log(waldo.printInfo())

// Javascript Inheritance using Classes

class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking;
    }

    isWalking(){
        if(this.walking == true){
            return 'Babeh is walkingnuh!!!'
        } else {
            return 'Babeh is no walkingnuh...'
        }
    }
}

let calab = new Baby('Caleb', 1, 'Male', true)

console.log(calab.printInfo())

console.log(calab.isWalking())

// JS closures

// Closure is a self-invoking function that only runs once
// Most Important Thing: CLOSURE HAS PRIVATE DATA INSIDE IT

// Closures are also a variable data type

var outsideNum = 5

var addNums = function () {
    var insideNum = 6;
    return outsideNum + insideNum;
}

console.dir(addNums)

let newAdd = function(outer_var){

    let innerAdd = function (inner_var){
        return outer_var + inner_var;
    };
    return innerAdd;
}

let addFive = new newAdd(5);


let addSix = new newAdd(6);

console.log(addFive(2))

console.dir(addFive)

let count_up = ( function() {
    let counter = 0; // this will be our private variable
    console.log('Hit');
    return function () { return counter ++}
}) ()

// console.log(count_up())
// console.log(count_up())
// console.log(count_up())
// console.dir(count_up)

let addNames = ( function () {
    let names =[];
    console.log('Adding Names... *BEEP*')
    return function (name){
        console.log(names)
        return names.push(name)
    }
})()

console.log(addNames('Wendell'))
console.log(addNames('Rodger'))

// Async JavaScript Section

// Functional programming exchanges large objects with a large amount of moving parts
// Pure functions take data, change it and return it

//  JS Callbacks

// Simply put: A callback is a function to be executed after another function
// has finished its execution...

// Because of the Javascript Event Loop == an event driven language
// so instead of waiting for a response before moving on, JS will keep executing
// while listening for other event


function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

first()
second()

function first_delay(){
    // Simulate the delay
    setTimeout(function(){
        console.log(1)
    }, 5000)
}
function second_delay(){
    console.log(2)
}

first_delay()
second_delay()
 
// Callback function syntax

function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`);
    callback()
}

doHomework('JavaScript', function() {
    console.log('Done with Homework')
})


const isEvenNumber = (num) => {
    return new Promise( (resolve, reject) => {
        if(num % 2 == 0){
            resolve(num)
        } else {
            reject(num)
        }
    })
}

// Using the JS promise

isEvenNumber(10)
// Match path (Resolve)

.then( (result) => {
    console.log(`Even number ${result}`)
})
// Error path
.catch((error)=> {
    console.log(`Odd Number ${error}`)
})

// Another example with promises -- using Async/Await

function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

function slow_addition(n1,n2){
    return new Promise((resolve) => {
        setTimeout( () => resolve(n1+n2), 2000)
    })
}

function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.low(`New salary will be ${new_salary}`);
    return new_salary
}

async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`The new salary is: ${new_salary}`);
    return new_salary
}

async_increase_salary(50000,5000)