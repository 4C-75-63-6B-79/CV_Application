import React from "react";

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {type, textContent, onClickMethod} = this.props;
        
        return(
            <button type={type} onClick={onClickMethod}>{textContent}</button>
        )
    }
}

export default Button;