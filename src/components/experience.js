import React from "react";
import Input from "./input";

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.htmlInputProperties = [
            {
                type: "text",
                name: "Position",
                placeholder: "Position",
                minlength: "3",
                maxlength: "20",
                pattern: "[A-Z]{1}[A-Za-z ]{2,20}",
                onChangeMethod: this.inputValueChange.bind(this),
            },
            {
                type: "text",
                name: "Company",
                placeholder: "Company",
                minlength: "3",
                maxlength: "20",
                pattern: "[A-Z]{1}[A-Za-z ]{2,20}",
                onChangeMethod: this.inputValueChange.bind(this)
            },
            {
                type: "text",
                name: "City",
                placeholder: "Position",
                minlength: "3",
                maxlength: "20",
                pattern: "[A-Z]{1}[A-Za-z ]{2,20}",
                onChangeMethod: this.inputValueChange.bind(this)
            },
            {
                type: "text",
                name: "From",
                minlength: "9",
                maxlength: "15",
                placeholder: "May, 2021",
                pattern:"[a-z]{9}, [0-9]{4}",
                onChangeMethod: this.inputValueChange.bind(this)
            },
            {
                type: "text",
                name: "To",
                minlength: "9",
                maxlength: "15",
                placeholder: "March, 2022",
                pattern:"[a-z]{9}, [0-9]{4}",
                onChangeMethod: this.inputValueChange.bind(this)
            }
        ];
        this.state = {
            "Position": {
                value: "",
                errorMessage: ""
            },
            "Company": {
                value: "",
                errorMessage: ""
            },
            "City": {
                value: "",
                errorMessage: ""
            },
            "From": {
                value: "",
                errorMessage: ""
            },
            "To": {
                value: "",
                errorMessage: ""
            },
        }
    }

    inputValueChange(event) {
        console.log(this);
    }

    render() {
        const inputElements = this.htmlInputProperties.map((inputElementProp) => {
            const {type, name, placeholder, minlength, maxlength, pattern, onChangeMethod} = inputElementProp;
            const {value, errorMessage} = this.state[name];
            return <Input key={name} type={type} name={name} placeholder={placeholder} value={value} pattern={pattern} minlength={minlength} maxlength={maxlength} errorMessage={errorMessage} onChangeMethod={onChangeMethod}/>
        });
        return(
            <fieldset>
                <legend>{"Experience"}</legend>
                {inputElements}
            </fieldset>
        )
    }
}

export default Experience;