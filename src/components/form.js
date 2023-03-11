import React from "react";
import PersonalInformation from "./personal_information";
import Button from "./button";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.submitButtonClicked = this.submitButtonClicked.bind(this);
    }

    submitButtonClicked() {
        console.log('submit button clicked');
    }

    render() {
        const fromSubmitButton = <Button textContent="Submit" onClickMethod={this.submitButtonClicked}/>;

        return(
            <form method={"#"}>
                <PersonalInformation />
                {fromSubmitButton}
            </form>
        );
    }

}

export default Form;