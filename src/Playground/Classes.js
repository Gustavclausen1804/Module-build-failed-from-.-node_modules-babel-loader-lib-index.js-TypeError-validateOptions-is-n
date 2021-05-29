// es6 classes 

// Class:
class Person {
    // construct
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
        }
        //Method: 
    getGretting() {
        return `Hi i am test ${ this.name}!`;
    }
    // return description, Method. 
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //Calls parent constructor function
        this.major = major;
    }
    //method 
    hasMajor() {
        return !!this.major;
    }
    // Overwrite the method: 
    getDescription () {
        let description = super.getDescription();

        if (this.hasMajor()) { 
        description += ` Their major is ${this.major}.`;
        }
        // return the new description 
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    //method, test if location is present
    hasGreeting() {
        return !!this.location;
    }
    // overwrite the method of greeting. 
    getGretting() {
        let greeting = super.getGretting();

        if (this.hasGreeting()) {
            greeting += ` I'm visiting from ${this.location}`;
        }
    return greeting;
    }
}

//instance of construct
const me = new Traveler("Gustav Clausen", 20, "Denmark");
console.log(me.getGretting());
// instance of construct 
const other = new Traveler();
console.log(other.getGretting());