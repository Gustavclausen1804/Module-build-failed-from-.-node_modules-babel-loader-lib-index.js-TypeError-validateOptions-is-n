import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./options";
import OptionModal from "./optionModal";

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
    };
    handleAddOption = (option) => {
        if (!option) {
            return "enter valid value to add an item to the list!";
        } else if (this.state.options.indexOf(option) > -1) {
            return "this option already exsits";
        }
        else {
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
};
    handleCloseModal = () => {
        this.setState(() => ({selectedOption: undefined}));
    };
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

    render(){
        const subtitle = "Put your life in the hands of a computer !!!";
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
            <OptionModal
            handleCloseModal={this.handleCloseModal}
            selectedOption = {this.state.selectedOption}
            />
            </div>
        );
    }
}
