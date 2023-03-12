import React from "react";

class CVHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header>
                <h1>{"Name"}</h1>
                <p>{"Phone Number"}</p>
                <p>{"Email"}</p>
                <p>{"Address"}</p>
            </header>
        )
    }
}

export default CVHeader;