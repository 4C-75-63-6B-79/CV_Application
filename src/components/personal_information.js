import React from "react";
import Input from "./input";

class PersonalInformation extends React.Component {

    constructor(props) {
        super(props);
        this.htmlInputProperties = [
            {
                type: "text",
                name: "First Name",
                placeholder: 'First Name',
                minlength: '3',
                maxlength: '25',
                pattern: '[A-Z]{1}[A-Za-z]{2,24}',
                onChangeMethod: this.inputFirstNameValueChanged.bind(this)
            },
            {
                type: 'text',
                name: 'Last Name',
                placeholder: 'Last Name',
                minlength: '3',
                maxlength: '25',
                pattern: '[A-Z]{1}[A-Za-z]{3,24}',
                onChangeMethod: this.inputLastNameValueChanged.bind(this)
            },
            {
                type: 'text',
                name: 'Title',
                placeholder: 'Title',
                minlength: '2',
                maxlength: '3',
                pattern: 'Mr|Mrs|Ms',
                onChangeMethod: this.inputTitleValueChanged.bind(this)
            },
            {
                type: "text",
                name: 'Address',
                placeholder: 'Address',
                minlength: '4',
                maxlength: '50',
                pattern: '[-/,A-Za-z0-9 ]{4,50}',
                onChangeMethod: this.inputAddressValueChanged.bind(this)
            },
            {
                type: 'text',
                name: 'Phone Number',
                placeholder: 'Phone Number',
                minlength: "10",
                maxlength: '10',
                pattern: '[1-9]{1}[0-9]{9,9}',
                onChangeMethod: this.inputPhoneNumberValueChanged.bind(this)
            },
            {
                type: "email",
                name: 'Email',
                placeholder: 'Email',
                minlength: '10',
                maxlength: "10",
                pattern: "[0-9a-zA-Z_]{1,}@{1}[A-Za-z]{1,}[/.]{1}com",
                onChangeMethod: this.inputEmailValueChanged.bind(this)
            }
        ]
        this.state = {
            "First Name": {
                value: '',
                errorMessage: '',
            },
            "Last Name": {
                value: '',
                errorMessage: '',
            },
            "Title": {
                value: '',
                errorMessage: '',
            },
            "Address": {
                value: '',
                errorMessage: '',
            },
            "Phone Number": {
                value: '',
                errorMessage: '',
            },
            "Email": {
                value: '',
                errorMessage: '',
            }
        }
    }

    inputFirstNameValueChanged(event) {
        const inputValue = event.target.value;
        const isValid = event.target.validity.valid;
        let errorMessage = '';
        if(isValid) {
            errorMessage = 'Input is valid';
        } else {
            if(!(/^[A-Z]/.test(inputValue.charAt(0)))) {
                errorMessage = 'First letter of name should be capital.';
            } else if(inputValue.length < 3) {
                errorMessage = "The first name should be more than 3 character";
            } else if(inputValue.length > 25) {
                errorMessage = "The first name should be less than 25 characte";
            }
        }
        this.setState({
            "First Name": {
                value: inputValue,
                errorMessage: errorMessage,
            }
        });
    }

    inputLastNameValueChanged(event) {
        const inputValue = event.target.value;
        const isValid = event.target.validity.valid;
        let errorMessage = '';
        if(isValid) {
            errorMessage = 'Input is valid';
        } else {
            if(!(/^[A-Z]/.test(inputValue.charAt(0)))) {
                errorMessage = 'First letter of name should be capital.';
            } else if(inputValue.length < 3) {
                errorMessage = "The first name should be more than 3 character";
            } else if(inputValue.length > 25) {
                errorMessage = "The first name should be less than 25 characte";
            }
        }
        this.setState({
            "Last Name": {
                value: inputValue,
                errorMessage: errorMessage,
            }
        });
    }

    inputTitleValueChanged(event) {
        const inputValue = event.target.value;
        const isValid = event.target.validity.valid;
        let errorMessage = '';
        if(isValid) {
            errorMessage = 'Input is valid';
        } else {
            if(!(/(Mr)|(Mrs)|(Ms)/.test(inputValue))) {
                errorMessage = 'You can use only 3 titles Mr, Ms, Mrs.';
            } else {
                errorMessage = 'Use the valid titles Mr, Ms, Mrs.';
            }
        }
        this.setState({
            "Title": {
                value: inputValue,
                errorMessage: errorMessage,
            }
        });
    }

    inputAddressValueChanged(event) {
        const inputValue = event.target.value;
        const isValid = event.target.validity.valid;
        let errorMessage = '';
        if(isValid) {
            errorMessage = 'Input is valid';
        } else {
            if(inputValue.length < 4) {
                errorMessage = 'Address should have more than 4 characters.';
            } else if(inputValue.length > 50){
                errorMessage = 'Address should have less than 51 characters.';
            }
        }
        this.setState({
            "Address": {
                value: inputValue,
                errorMessage: errorMessage,
            }
        });
    }

    inputPhoneNumberValueChanged(event) {
        const inputValue = event.target.value;
        const isValid = event.target.validity.valid;
        let errorMessage = '';
        if(isValid) {
            errorMessage = 'Input is valid';
        } else {
            if((/^0/.test(inputValue.charAt(0)))) {
                errorMessage = 'Phone number should not begin with 0.';
            } else if(inputValue.length < 10) {
                errorMessage = "Phone number should have 10 digits.";
            } else if(inputValue.length > 10) {
                errorMessage = "Phone number should have 10 digits.";
            }
        }
        this.setState({
            "Phone Number": {
                value: inputValue,
                errorMessage: errorMessage,
            }
        });
    }

    inputEmailValueChanged(event) {
        const inputValue = event.target.value;
        const isValid = event.target.validity.valid;
        this.setState({
            "Email": {
                value: inputValue,
                errorMessage: ''
            }
        });
        console.log(this.state);
    }

    render() {
        const inputElements = this.htmlInputProperties.map((inputElementProp) => {
            const {type, name, placeholder, minlength, maxlength, pattern, onChangeMethod} = inputElementProp;
            const {value, errorMessage} = this.state[name];
            return <Input key={name} type={type} name={name} placeholder={placeholder} value={value} pattern={pattern} minlength={minlength} maxlength={maxlength} errorMessage={errorMessage} onChangeMethod={onChangeMethod}/>
        });
        return(
            <fieldset>
                <legend>{"Personal Information"}</legend>
                {inputElements}
            </fieldset>
        )
    }
}

export default PersonalInformation;