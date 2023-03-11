import React from "react";

class Error extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {className, errorMessage} = this.props;
        return (
            <span className={className}>{errorMessage}</span>
        );
    }
}

export default Error;