console.log("App.js is running!!!!");

// JSX - JavaScript XML
const app = {
    title: "list title",
    subtitle: "sub title",
    options: []
};
const onformsubmit = (e) => {
    e.preventDefault();

    let option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        rendercounterapp()
    }
};

const reset = () => {
    app.options = [];
    rendercounterapp();
};
const onmakedecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById("app");


const rendercounterapp = () => {
    const templatethree = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p> {app.options.length > 0 ? "Here are your options: " : "No options"}</p>
            <p>{app.options.length}</p>
        <button disabled={app.options.length === 0} onClick={reset}>reset</button>
        <button disabled={app.options.length === 0} onClick={onmakedecision}> What should i do?</button>
        <ol>
    {
        app.options.map((option) => {
            return <li key={option}>Number: {option}</li>
        })
    }
    </ol>
        <form onSubmit={onformsubmit}> 
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
        </div>
        );
        
        ReactDOM.render(templatethree, appRoot);
};
rendercounterapp()