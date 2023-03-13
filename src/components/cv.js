import React from "react";
import CVEducation from "./cv_education";
import CVExperience from "./cv_experience";
import CVHeader from "./cv_header";

class CV extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <CVHeader />
                <section>
                    <h2>Experience</h2>
                    <CVExperience/>
                </section>
                <section>
                    <h2>Education</h2>
                    <CVEducation/>
                </section>
            </div>
        )
    }
}

export default CV;