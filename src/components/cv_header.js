import React from "react";

class CVHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const firstName = this.props.information['First Name'] || "";
        const lastName = this.props.information['Last Name'] || "";
        const title = this.props.information['Title'] || "";
        const phoneNumber = this.props.information['Phone Number'] || "";
        const email = this.props.information['Email'] || "";
        const address = this.props.information['Address'] || "";
        return(
            <header>
                <h1>{title + " " + firstName + " " + lastName}</h1>
                <p>{"Ph: "+ phoneNumber+ ", email: " + email + ", address: " + address }</p>
            </header>
        )
    }
}

export default CVHeader;