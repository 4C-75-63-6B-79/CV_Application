import React from "react";

class CVEducation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>{"College"}</h3>
                <p>{"From To"}</p>
                <p>{"Subject"}</p>
                <p>{"Degree"}</p>
            </div>
        )
    }
}

export default CVEducation;