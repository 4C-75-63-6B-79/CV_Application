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

    setExperienceInformation(experienceIndex, attributeName, attributeValue) {

    }

    addOneMoreExperienceButtonClicked(event) {
        event.preventDefault();
        const updateNumberOfExperience = this.state.numberOfExperience + 1;
        this.setState({
            numberOfExperience: updateNumberOfExperience
        });
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
            return <Experience key={"experienceIndex"+value} experienceIndex={value} onClickDeleteExperience={this.removeExperienceButtonClicked}/>;
        });
        const fromSubmitButton = <Button textContent="Submit" onClickMethod={this.submitButtonClicked}/>;
        const addOneMoreExperienceButton = <Button textContent="Add" onClickMethod={this.addOneMoreExperienceButtonClicked}/>;

        return(
            <form method={"#"}>
                <PersonalInformation setPersonalInformation={this.setPersonalInformation}/>
                <fieldset>
                    <legend>{"Experience"}</legend>
                    {experienceElemets}
                    {addOneMoreExperienceButton}
                </fieldset>
                {fromSubmitButton}
            </form>
        );
    }

}

export default Form;