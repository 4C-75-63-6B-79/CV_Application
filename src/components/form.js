import React from "react";
import PersonalInformation from "./personal_information";
import Experience from "./experience";
import Button from "./button";
import Education from "./education";

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

    setEducationInformation(educationId, attributeName, attributeValue) {
        const educationInformation = this.state.educationInformation;
        const educationAtIndex = educationInformation[educationId] || {};
        educationAtIndex[attributeName] = attributeValue;
        educationInformation[educationId] = educationAtIndex;
        this.setState({
            educationInformation: educationInformation,
        });
    }

    addOneMoreEducationButtonClicked(event) {
        event.preventDefault();
        const educationIdPresent = this.state.educationIds;
        const lastEducationId = educationIdPresent.length === 0 ? -1 : educationIdPresent[educationIdPresent.length-1];
        const newEducationId = lastEducationId + 1;
        educationIdPresent.push(newEducationId);
        this.setState({
            educationIds: educationIdPresent
        });
    }

    updateEducationInformation(educationId) {
        const updatedEducationInformation = this.state.educationInformation;
        delete updatedEducationInformation[educationId];
        this.setState({
            educationInformation: updatedEducationInformation
        });
    }

    updateEducationIds(educationId) {
        const updatedEducationIds = this.state.educationIds;
        const indexOfEducationToBeRemoved = updatedEducationIds.indexOf(educationId);
        updatedEducationIds.splice(indexOfEducationToBeRemoved, 1);
        this.setState({
            educationIds: updatedEducationIds
        });
    }

    removeEducationButtonClicked(educationId) {
        this.updateEducationIds(educationId);
        this.updateEducationInformation(educationId);
    }

    submitButtonClicked(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const experienceElements = this.state.experienceIds.map((experienceId) =>{
            return <Experience key={"experienceIndex"+experienceId} experienceId={experienceId} onClickDeleteExperience={this.removeExperienceButtonClicked} setExperienceInformation={this.setExperienceInformation}/>;
        });
        const educationElements = this.state.educationIds.map((educationId) =>{
            return <Education key={"educationIndex"+educationId} educationId={educationId} onClickDeleteEducation={this.removeEducationButtonClicked} setEducationInformation={this.setEducationInformation}/>;
        });
        const fromSubmitButton = <Button textContent="Submit" onClickMethod={this.submitButtonClicked}/>;
        const addOneMoreExperienceButton = <Button textContent="Add" onClickMethod={this.addOneMoreExperienceButtonClicked}/>;
        const addOneMoreEducationButton = <Button textContent="Add" onClickMethod={this.addOneMoreEducationButtonClicked}/>;
        return(
            <form method={"#"}>
                <PersonalInformation setPersonalInformation={this.setPersonalInformation}/>
                <fieldset >
                    <legend>{"Experience"}</legend>
                    {experienceElements}
                    {addOneMoreExperienceButton}
                </fieldset>
                <fieldset>
                    <legend>{"Education"}</legend>
                    {educationElements}
                    {addOneMoreEducationButton}
                </fieldset>
                {fromSubmitButton}
            </form>
        );
    }

}

export default Form;