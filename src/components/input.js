import React from "react";

class Input extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const {type, name, placeholder, pattern, minLength, maxLength} = this.props;
        return(
            <input type={type} name={name} placeholder={placeholder} pattern={pattern} minLength={minLength} maxLength={maxLength} required></input>
        );
    }
}

export default Input;