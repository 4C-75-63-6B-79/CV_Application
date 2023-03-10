import React from "react";
import PersonalInformation from "./personal_information";

class Form extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form method={"#"}>
                <PersonalInformation />
            </form>
        );
    }

}

export default Form;