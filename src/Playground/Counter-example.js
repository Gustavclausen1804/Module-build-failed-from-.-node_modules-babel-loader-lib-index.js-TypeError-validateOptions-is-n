console.log("App.js is running!!!!");

// test of es6 - arrowfunction 
const fistname_test = "Gustav Clausen";
const namefunc = (n) => {
    return n.split(" ")[0];
};
console.log(namefunc(fistname_test));

// one line arrow function
const firstname_test_2 = (n) => n.split(" ")[0];
console.log(firstname_test_2(fistname_test));   

// Challenge es6 - map and arrow functions
const multiplier = {
    numbers: [2,4,6,8,10,12],
    multiplyby: 3,
    multiply(x) {
        return this.numbers.map((n) => n*this.multiplyby*x);
    }
};
console.log(multiplier.multiply(20))

// JSX - JavaScript XML
const app = {
    title: "list title",
    subtitle: "sub title",
    options: ["one", "two"]
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p> {app.options.length > 0 ? "Here are your options: " : "No options"}</p>
        <ol>
        <li>Item one</li>
        <li>Item two</li>
        </ol>
    </div>
    );    

const apptemplate = (
    <div>
    <h1>{app.title}</h1>
    <h2>{app.subtitle}</h2>
    </div>
);

const user = {
    name: "Gustav",
    age: 20,
    location: "København"
};
function getlocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

const templatetwo = (
<div>
    <h1>{user.name ? user.name: "Anonymous"}</h1>
    <p>Age: {user.age}</p>
    {getlocation(user.location)}
</div>
);

let count = 0;
const addone = () => {
    count++;
    rendercounterapp();
};
const minusone = () => {
    count--;
    rendercounterapp();
};
const reset = () => {
    count = 0;
    rendercounterapp();
};


// create a templatetwo var JSX expression 
const appRoot = document.getElementById("app");



const rendercounterapp = () => {
    const templatethree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addone}>+1</button>
            <button onClick={minusone}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
        );
        ReactDOM.render(templatethree, appRoot);
};
rendercounterapp()