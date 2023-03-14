import React from "react";
import CVEducation from "./cv_education";
import CVExperience from "./cv_experience";
import CVHeader from "./cv_header";

class CV extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {personalInformation, experienceInformation, educationInformation} = this.props.cvInformation;
        const experienceHtmlElements = Object.keys(experienceInformation).map((key) => {
            return <CVExperience key={"ex"+key} information={experienceInformation[key]}/>;
        });
        const educationHtmlElements = Object.keys(educationInformation).map((key) => {
            return <CVEducation key={"ed"+key} information={educationInformation[key]}/>;
        });
        return(
            <div className="cv">
                <CVHeader information={personalInformation}/>
                <section>
                    <h2>Experience</h2>
                    {experienceHtmlElements}
                </section>
                <section>
                    <h2>Education</h2>
                    {educationHtmlElements}
                </section>
            </div>
        )
    }
}

export default CV;