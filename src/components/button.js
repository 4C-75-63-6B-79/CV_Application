import React from "react";

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {textContent, onClickMethod} = this.props;
        
        return(
            <button onClick={onClickMethod}>{textContent}</button>
        )
    }
}

export default Button;