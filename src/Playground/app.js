class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }

        } catch (e) {
            // do nothing at all

        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
        
    }

    // instead of using return to return options, we will use this syntax to explictily return the object within the ()
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return "enter valid value to add an item to the list!";
        } else if (this.state.options.indexOf(option) > -1) {
            return "this option already exsits";
        }
        else {
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
}
    render(){
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
            <Header subtitle={subtitle}/>
            <Action 
            hasOptions = {this.state.options.length > 0}
            handlePick = {this.handlePick}
            />
            
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption} //gets passed down to option component from here
            />
            <AddOption
            handleAddOption={this.handleAddOption} //prop
            />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision app"
};

// Class component 
//class Header extends React.Component {
//    render(){
//        return (
//            <div>
//            <h1>{this.props.title}</h1>
//            <h2>{this.props.subtitle}</h2>
//           </div>
//
//        );
//    }
//}
const Action = (props) => {
    return (
        <div>
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should i do?
        </button>
        </div>
    );
};

//class Action extends React.Component {
//    render() {
//        return (
//            <div>
//           <button 
//            onClick={this.props.handlePick}
//            disabled={!this.props.hasOptions}
//            >
//            What should i do?
//            </button>
//            </div>
//        );
//    }
// }

// options => Options compnent here: 
//Option is nested: 

const Options = (props) => {
    return (
            <div>
            <button onClick={props.handleDeleteOptions}>Remove all!</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
              {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optiontext={option}
                        handleDeleteOption={props.handleDeleteOption} //takes the prop from option component
                        />
                ))
            }
            </div>

    );
};
//class Options extends React.Component {
//    render () {
//        return (
//            <div>
//            <button onClick={this.props.handleDeleteOptions}>Remove all!</button>
//              {
//                this.props.options.map((option) => <Option key={option} optiontext={option}/>)
//            }
//            </div>
//       );
//    }
// }


//Option compnent 

const Option = (props) => {
    return (
        <div>
        {props.optiontext}
        <button 
        onClick={(e) => {
            props.handleDeleteOption(props.optiontext);
        }}
        
        >remove</button>
        </div>
        // sends the button to the Option component which is rendered in options
    );
};
//class Option extends React.Component {
//    render () {
//        return (
//            <div>
//            {props.optiontext}
//            </div>
//        );
//    }
//  }

// Add option component

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim(); // option is the name of the form
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error})); 

        if (!error) {
            e.target.elements.option.value = "";    
        }

    }
    render() {

        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}> 
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
            </div>
        );
    }
}

// stateless function. Not possible to use state but only props. Good for simple components
// props.name, props gets loaded from the input in the <user name="Gustav" tag
// they are faster than class based react components 
// easier to write and read, and test
// const User = (props)  => {
//    return (
//        <div> 
//        <p>Name: {props.name}</p>
//        <p>Age: {age.name}</p>
//        </div>
//    );
// };
//We render the component and not a usual varialbe as an jsx expression.
ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));

