import React from "react";
import Error from "./error_message";

class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.inputValueChanged = this.inputValueChanged.bind(this);
        this.state = {
            errorMessage: this.props.errorMessage,
            className: 'error'
        }
    }

    inputValueChanged(event) {
        console.log(event.target.value);
        this.props.onChangeMethod(event);
    }

    render() {
        const {type, name, placeholder, value, pattern, minLength, maxLength} = this.props;
        return(
            <div>
                <input type={type} name={name} placeholder={placeholder} value={value} pattern={pattern} minLength={minLength} maxLength={maxLength} onChange={this.inputValueChanged} required></input>
                <Error className={this.state.className} errorMessage={this.state.errorMessage}/>
            </div>
        );
    }
}

export default Input;