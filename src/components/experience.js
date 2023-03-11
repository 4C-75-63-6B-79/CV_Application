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
                onChangeMethod: this.inputPositionValueChanged.bind(this),
            },
            {
                type: "text",
                name: "Company",
                placeholder: "Company",
                minlength: "3",
                maxlength: "20",
                pattern: "[A-Z]{1}[A-Za-z ]{2,20}",
                onChangeMethod: this.inputCompanyValueChanged.bind(this)
            },
            {
                type: "text",
                name: "City",
                placeholder: "Position",
                minlength: "3",
                maxlength: "20",
                pattern: "[A-Z]{1}[A-Za-z ]{2,20}",
                onChangeMethod: this.inputCityValueChanged.bind(this)
            },
            {
                type: "text",
                name: "From",
                minlength: "9",
                maxlength: "15",
                placeholder: "May, 2021",
                pattern:"((January)|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)), ((19)|(20))[0-9]{2}",
                onChangeMethod: this.inputFromValueChanged.bind(this)
            },
            {
                type: "text",
                name: "To",
                minlength: "9",
                maxlength: "15",
                placeholder: "March, 2022",
                pattern:"((January)|(February)|(March)|(April)|(May)|(June)|(July)|(August)|(September)|(October)|(November)|(December)), ((19)|(20))[0-9]{2}",
                onChangeMethod: this.inputToValueChanged.bind(this)
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

    inputPositionValueChanged(event) {
        const inputValue = event.target.value;
        const attributeValue = event.target.name;
        const isValid = event.target.validity.valid;
        let errorMessage = ""
        if(isValid) {
            errorMessage = "Input is valid.";
        } else {
            if(!(/^[A-Z]/.test(inputValue.charAt(0)))) {
                errorMessage = 'First letter of position should be capital.';
            } else if(inputValue.length < 3) {
                errorMessage = "Position should be atleast 3 characters long.";
            } else if(inputValue.length > 20) {
                errorMessage = "Postion should be atmost 20 characters long.";
            }
        }
        this.setState({
            "Position": {
                value: inputValue,
                errorMessage: errorMessage
            }
        });
    }

    inputCompanyValueChanged(event) {
        console.log(event.target.validity.valid);
        const inputValue = event.target.value;
        const attributeValue = event.target.name;
        this.setState({
            "Company": {
                value: inputValue,
                errorMessage: ""
            }
        });
    }

    inputCityValueChanged(event) {
        console.log(event.target.validity.valid);
        const inputValue = event.target.value;
        const attributeValue = event.target.name;
        this.setState({
            "City": {
                value: inputValue,
                errorMessage: ""
            }
        });
    }

    inputFromValueChanged(event) {
        console.log(event.target.validity.valid);
        const inputValue = event.target.value;
        const attributeValue = event.target.name;
        this.setState({
            "From": {
                value: inputValue,
                errorMessage: ""
            }
        });
    }

    inputToValueChanged(event) {
        console.log(event.target.validity.valid);
        const inputValue = event.target.value;
        const attributeValue = event.target.name;
        this.setState({
            "To": {
                value: inputValue,
                errorMessage: ""
            }
        });
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