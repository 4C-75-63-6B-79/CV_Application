import React from "react";
import PersonalInformation from "./personal_information";
import Experience from "./experience";
import Button from "./button";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           personalInformation: {},
           experienceIds: [0],
           experienceInformation: {},
           educationIds: [0],
           educationInformation: {}
        }
        this.setPersonalInformation = this.setPersonalInformation.bind(this);

        this.addOneMoreExperienceButtonClicked = this.addOneMoreExperienceButtonClicked.bind(this);
        this.removeExperienceButtonClicked = this.removeExperienceButtonClicked.bind(this);
        this.setExperienceInformation = this.setExperienceInformation.bind(this);
        this.updateExperienceIds = this.updateExperienceIds.bind(this);
        this.updateExperienceInformation = this.updateExperienceInformation.bind(this);

        this.addOneMoreEducationButtonClicked = this.addOneMoreEducationButtonClicked.bind(this);
        this.removeEducationButtonClicked = this.removeEducationButtonClicked.bind(this);
        this.setEducationInformation = this.setEducationInformation.bind(this);
        this.updateEducationIds = this.updateEducationIds.bind(this);
        this.updateEducationInformation = this.updateEducationInformation.bind(this);

        this.submitButtonClicked = this.submitButtonClicked.bind(this);
    }

    setPersonalInformation(attributeName, attributeValue) {
        const updatedPersonalInformation = this.state.personalInformation;
        updatedPersonalInformation[attributeName] = attributeValue;
        this.setState({
            personalInformation: updatedPersonalInformation
        });
    }

    setExperienceInformation(experienceId, attributeName, attributeValue) {
        const experienceInformation = this.state.experienceInformation;
        const experienceAtIndex = experienceInformation[experienceId] || {};
        experienceAtIndex[attributeName] = attributeValue;
        experienceInformation[experienceId] = experienceAtIndex;
        this.setState({
            experienceInformation: experienceInformation,
        });
    }

    addOneMoreExperienceButtonClicked(event) {
        event.preventDefault();
        const experienceIdPresent = this.state.experienceIds;
        const lastExperienceId = experienceIdPresent.length === 0 ? -1 : experienceIdPresent[experienceIdPresent.length-1];
        const newExperienceId = lastExperienceId + 1;
        experienceIdPresent.push(newExperienceId);
        this.setState({
            experienceIds: experienceIdPresent
        });
    }

    updateExperienceInformation(experienceId) {
        const updatedExperienceInformation = this.state.experienceInformation;
        delete updatedExperienceInformation[experienceId];
        this.setState({
            experienceInformation: updatedExperienceInformation
        });
    }

    updateExperienceIds(experienceId) {
        const updatedExperienceIds = this.state.experienceIds;
        const indexOfExperienceToBeRemoved = updatedExperienceIds.indexOf(experienceId);
        updatedExperienceIds.splice(indexOfExperienceToBeRemoved, 1);
        this.setState({
            experienceIds: updatedExperienceIds
        });
    }

    removeExperienceButtonClicked(experienceId) {
        this.updateExperienceIds(experienceId);
        this.updateExperienceInformation(experienceId);
    }

    setEducationInformation(experienceId, attributeName, attributeValue) {
        const experienceInformation = this.state.experienceInformation;
        const experienceAtIndex = experienceInformation[experienceId] || {};
        experienceAtIndex[attributeName] = attributeValue;
        experienceInformation[experienceId] = experienceAtIndex;
        this.setState({
            experienceInformation: experienceInformation,
        });
    }

    addOneMoreEducationButtonClicked(event) {
        event.preventDefault();
        const experienceIdPresent = this.state.experienceIds;
        const lastExperienceId = experienceIdPresent.length === 0 ? -1 : experienceIdPresent[experienceIdPresent.length-1];
        const newExperienceId = lastExperienceId + 1;
        experienceIdPresent.push(newExperienceId);
        this.setState({
            experienceIds: experienceIdPresent
        });
    }

    updateEducationInformation(experienceId) {
        const updatedExperienceInformation = this.state.experienceInformation;
        delete updatedExperienceInformation[experienceId];
        this.setState({
            experienceInformation: updatedExperienceInformation
        });
    }

    updateEducationIds(experienceId) {
        const updatedExperienceIds = this.state.experienceIds;
        const indexOfExperienceToBeRemoved = updatedExperienceIds.indexOf(experienceId);
        updatedExperienceIds.splice(indexOfExperienceToBeRemoved, 1);
        this.setState({
            experienceIds: updatedExperienceIds
        });
    }

    removeEducationButtonClicked(experienceId) {
        this.updateExperienceIds(experienceId);
        this.updateExperienceInformation(experienceId);
    }

    submitButtonClicked(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const experienceElemets = this.state.experienceIds.map((experienceId) =>{
            return <Experience key={"experienceIndex"+experienceId} experienceId={experienceId} onClickDeleteExperience={this.removeExperienceButtonClicked} setExperienceInformation={this.setExperienceInformation}/>;
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
                <fieldset>
                    <legend>{"Education"}</legend>
                    

                </fieldset>
                {fromSubmitButton}
            </form>
        );
    }

}

export default Form;