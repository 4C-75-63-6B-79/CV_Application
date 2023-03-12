import React from "react";

class CVExperience extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>{"Position"}</h3>
                <p>{"From To"}</p>
                <p>{"Company Name"}</p>
                <p>{"City"}</p>
            </div>
        )
    }
}

export default CVExperience;