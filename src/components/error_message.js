import React from "react";

class Error extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className={this.props.className}>{this.props.error}</span>
        );
    }
}

export default Error;