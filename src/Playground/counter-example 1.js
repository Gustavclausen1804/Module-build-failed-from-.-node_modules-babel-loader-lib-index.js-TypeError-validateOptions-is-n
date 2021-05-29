class Counter extends React.Component {

    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("count") //gets loaded as a string
            const count = parseInt(json, 10); // converts to int
            if (!isNan(count)) { // check if it exsits
                this.setState(() => ({count}))
            }           


        } catch(e) {

        }

    }
    // when component updates we will load the count into local storage. Only when it changes. 
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const count = this.state.count
            localStorage.setItem("count", count); // set localStorage
        }


    }

    handleAddOne () {
        // updates the state object: 
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        }); 
        console.log("handleMinusOne");
    }
    handleReset () {
        this.setState(() =>  {
            return {
                count: 0
            };
        });
    }
render() {
    return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
    </div>
      );
    }
}

ReactDOM.render(<Counter count={5}/>, document.getElementById("app"));
