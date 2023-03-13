import React from "react";

class CVEducation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const universityName = this.props.information['University Name'] || "";
        const city = this.props.information['City'] || "";
        const subject = this.props.information['Subject'] || "";
        const degree = this.props.information['Degree'] || "";
        const from = this.props.information['From'] || "";
        const to = this.props.information['To'] || "";
        return(
            <div>
                <h3>{universityName + ", " + city}</h3>
                <p>{from + "-" + to}</p>
                <p>{subject + ", " + degree}</p>
            </div>
        )
    }
}

export default CVEducation;