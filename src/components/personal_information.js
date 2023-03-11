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
                minlength: '1',
                maxlength: '25',
                pattern: '[A-Z]{1}[A-Za-z]{1,24}',
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
            firstName: {
                value: '',
                errorMessage: '',
            }
        }
    }

    inputFirstNameValueChanged(event) {
        console.log(this);
    }

    inputLastNameValueChanged(event) {
        console.log(this);
    }

    inputTitleValueChanged(event) {
        console.log(this);
    }

    inputAddressValueChanged(event) {
        console.log(this);
    }

    inputPhoneNumberValueChanged(event) {
        console.log(this);
    }

    inputEmailValueChanged(event) {
        console.log(this);
    }

    render() {
        const inputElements = this.htmlInputProperties.map((inputElementProp) => {
            const {type, name, placeholder, minlength, maxlength, pattern, onChangeMethod} = inputElementProp;
            const {value, errorMessage} = this.state;
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