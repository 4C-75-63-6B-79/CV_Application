import React from "react";
import PersonalInformation from "./personal_information";
import Button from "./button";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           personalInformation: {},
           experience: {},
           education: {}
        }
        this.submitButtonClicked = this.submitButtonClicked.bind(this);
        this.setPersonalInformation = this.setPersonalInformation.bind(this);
    }

    setPersonalInformation(attributeName, attributeValue) {
        const updatedPersonalInformation = this.state.personalInformation;
        updatedPersonalInformation[attributeName] = attributeValue;
        this.setState({
            personalInformation: updatedPersonalInformation
        });
    }

    submitButtonClicked(event) {
        // event.preventDefault();
        console.log(this.state);
    }

    render() {
        const fromSubmitButton = <Button textContent="Submit" onClickMethod={this.submitButtonClicked}/>;

        return(
            <form method={"#"}>
                <PersonalInformation setPersonalInformation={this.setPersonalInformation}/>
                {fromSubmitButton}
            </form>
        );
    }

}

export default Form;