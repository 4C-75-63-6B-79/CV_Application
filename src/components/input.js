import React from "react";

class Input extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const {type, name, placeholder, minLength, maxLength} = this.props;
        return(
            <input type={type} name={name} placeholder={placeholder} minlength={minLength} maxlength={maxLength} required></input>
        );
    }
}

export default Input;