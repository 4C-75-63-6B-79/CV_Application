import React from "react";

class PersonalInformation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <fieldset>
                <legend>{"Personal Information"}</legend>
            </fieldset>
        )
    }
}

export default PersonalInformation;