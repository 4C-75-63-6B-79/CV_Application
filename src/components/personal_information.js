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
                pattern: '[A-Z]{1}[A-Za-z]{1,24}'
            },
            {
                type: 'text',
                name: 'Last Name',
                placeholder: 'Last Name',
                minlength: '3',
                maxlength: '25',
                pattern: '[A-Z]{1}[A-Za-z]{3,24}'
            },
            {
                type: 'text',
                name: 'Title',
                placeholder: 'Title',
                minlength: '2',
                maxlength: '3',
                pattern: 'Mr|Mrs|Ms'
            },
            {
                type: "text",
                name: 'Address',
                placeholder: 'Address',
                minlength: '4',
                maxlength: '50',
                pattern: '[A-Za-z0-9/,- ]{4,50}'
            },
            {
                type: 'text',
                name: 'Phone Number',
                placeholder: 'Phone Number',
                minlength: "10",
                maxlength: '10',
                pattern: '[1-9]{1}[0-9]{9,9}'
            },
            {
                type: "email",
                name: 'Email',
                placeholder: 'Email',
                minlength: '10',
                maxlength: "10",
                pattern: "[0-9a-zA-Z_]{1,}@{1}[A-Za-z]{1,}[/.]{1}com"
            }
        ]
    }

    render() {
        const inputElements = this.htmlInputProperties.map((inputElementProp) => {
            const {type, name, placeholder, minlength, maxlength, pattern} = inputElementProp;
            return <Input key={name} type={type} name={name} placeholder={placeholder} pattern={pattern} minlength={minlength} maxlength={maxlength}/>
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