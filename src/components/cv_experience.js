import React from "react";

class CVExperience extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const position = this.props.information['Position'] || "";
        const company = this.props.information['Company'] || "";
        const city = this.props.information['City'] || "";
        const from = this.props.information['From'] || "";
        const to = this.props.information['To'] || "";
        return(
            <div>
                <h3>{position}</h3>
                <p>{from + "-" + to}</p>
                <p>{company + ", " + city}</p>
            </div>
        )
    }
}

export default CVExperience;