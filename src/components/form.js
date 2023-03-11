import React from "react";
import PersonalInformation from "./personal_information";
import Experience from "./experience";
import Button from "./button";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           personalInformation: {},
           numberOfExperience: 1,
           experienceInformation: [],
           numberOfEducation: 1,
           educationInformation: []
        }
        this.addOneMoreExperienceButtonClicked = this.addOneMoreExperienceButtonClicked.bind(this);
        this.removeExperienceButtonClicked = this.removeExperienceButtonClicked.bind(this);
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

    addOneMoreExperienceButtonClicked() {

    }

    removeExperienceButtonClicked() {
        const updateNumberOfExperience = this.state.numberOfExperience - 1;
        this.setState({
            numberOfExperience: updateNumberOfExperience
        });
    }

    submitButtonClicked(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const experienceElemets = Array.from({length: this.state.numberOfExperience}, (v, i) => i).map((value) => {
            return <Experience key={"experienceIndexv"+value} onClickDeleteExperience={this.removeExperienceButtonClicked}/>
        });
        const fromSubmitButton = <Button textContent="Submit" onClickMethod={this.submitButtonClicked}/>;

        return(
            <form method={"#"}>
                <PersonalInformation setPersonalInformation={this.setPersonalInformation}/>
                {experienceElemets}
                {fromSubmitButton}
            </form>
        );
    }

}

export default Form;