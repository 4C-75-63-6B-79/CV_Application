import React from "react";
import Input from "./input";
import Button from "./button";

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
                placeholder: "City",
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
        this.deleteButtonClicked = this.deleteButtonClicked.bind(this);
    }

    inputPositionValueChanged(event) {
        const inputValue = event.target.value;
        const attributeName = event.target.name;
        const experienceId = this.props.experienceId;
        const isValid = event.target.validity.valid;
        let errorMessage = "";
        if(isValid) {
            errorMessage = "Input is valid.";
            this.props.setExperienceInformation(experienceId, attributeName, inputValue);
        } else {
            if(!(/^[A-Z]/.test(inputValue.charAt(0)))) {
                errorMessage = 'First letter of position should be capital.';
            } else if(/[^A-Za-z ]/.test(inputValue)) {
                errorMessage = 'Position can only have alphabets and spaces.'
            } else if(inputValue.length < 3) {
                errorMessage = "Position should be atleast 3 characters long.";
            } else if(inputValue.length > 20) {
                errorMessage = "Postion should be atmost 20 characters long.";
            } else {
                errorMessage = "Input is invalid.";
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
        const inputValue = event.target.value;
        const attributeName = event.target.name;
        const experienceId = this.props.experienceId;
        const isValid = event.target.validity.valid;
        let errorMessage = "";
        if(isValid) {
            errorMessage = "Input is valid.";
            this.props.setExperienceInformation(experienceId, attributeName, inputValue);
        } else {
            if(!(/^[A-Z]/.test(inputValue.charAt(0)))) {
                errorMessage = 'First letter of company name should be capital.';
            } else if(/[^A-Za-z ]/.test(inputValue)) {
                errorMessage = 'Company name can only have alphabets and spaces.'
            } else if(inputValue.length < 3) {
                errorMessage = "Company name should be atleast 3 characters long.";
            } else if(inputValue.length > 20) {
                errorMessage = "Company name should be atmost 20 characters long.";
            } else {
                errorMessage = "Input is invalid.";
            }
        }
        this.setState({
            "Company": {
                value: inputValue,
                errorMessage: errorMessage
            }
        });
    }

    inputCityValueChanged(event) {
        const inputValue = event.target.value;
        const attributeName = event.target.name;
        const experienceId = this.props.experienceId;
        const isValid = event.target.validity.valid;
        let errorMessage = "";
        if(isValid) {
            errorMessage = "Input is valid.";
            this.props.setExperienceInformation(experienceId, attributeName, inputValue);
        } else {
            if(!(/^[A-Z]/.test(inputValue.charAt(0)))) {
                errorMessage = 'First letter of city name should be capital.';
            } else if(/[^A-Za-z ]/.test(inputValue)) {
                errorMessage = 'City name can only have alphabets and spaces.'
            } else if(inputValue.length < 3) {
                errorMessage = "City name should be atleast 3 characters long.";
            } else if(inputValue.length > 20) {
                errorMessage = "City name should be atmost 20 characters long.";
            } else {
                errorMessage = "Input is invalid.";
            }
        }
        this.setState({
            "City": {
                value: inputValue,
                errorMessage: errorMessage
            }
        });
    }

    inputFromValueChanged(event) {
        const inputValue = event.target.value;
        const attributeName = event.target.name;
        const experienceId = this.props.experienceId;
        const isValid = event.target.validity.valid;
        let errorMessage = "";
        if(isValid) {
            errorMessage = "Input is valid.";
            this.props.setExperienceInformation(experienceId, attributeName, inputValue);
        } else {
            if(!(/^[A-Z]/.test(inputValue.charAt(0)))) {
                errorMessage = "First character of month should be capital letter."
            } else {
                errorMessage = "Date should have a valid month and a year which can be as old as 1900. Format 'May, 1989'."
            }
        }
        this.setState({
            "From": {
                value: inputValue,
                errorMessage: errorMessage
            }
        });
    }

    inputToValueChanged(event) {
        const inputValue = event.target.value;
        const attributeName = event.target.name;
        const experienceId = this.props.experienceId;
        const isValid = event.target.validity.valid;
        let errorMessage = "";
        if(isValid) {
            errorMessage = "Input is valid.";
            this.props.setExperienceInformation(experienceId, attributeName, inputValue);
        } else {
            if(!(/^[A-Z]/.test(inputValue.charAt(0)))) {
                errorMessage = "First character of month should be capital letter."
            } else {
                errorMessage = "Date should have a valid month and a year which can be as old as 1900. Format 'May, 1989'."
            }
        }
        this.setState({
            "To": {
                value: inputValue,
                errorMessage: errorMessage
            }
        });
    }

    deleteButtonClicked(event) {
        event.preventDefault();
        this.props.onClickDeleteExperience(this.props.experienceId);
    }

    render() {
        const inputElements = this.htmlInputProperties.map((inputElementProp) => {
            const {type, name, placeholder, minlength, maxlength, pattern, onChangeMethod} = inputElementProp;
            const {value, errorMessage} = this.state[name];
            return <Input key={name} type={type} name={name} placeholder={placeholder} value={value} pattern={pattern} minlength={minlength} maxlength={maxlength} errorMessage={errorMessage} onChangeMethod={onChangeMethod}/>
        });
        return(
            <section>
                {inputElements}
                <Button textContent={"Delete"} onClickMethod={this.deleteButtonClicked}/>
            </section>
        )
    }
}

export default Experience;