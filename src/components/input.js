import React from "react";
import Error from "./error_message";

class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.inputValueChanged = this.inputValueChanged.bind(this);
        this.state = {
            className: 'error'
        }
    }

    inputValueChanged(event) {
        if(!event.target.validity.valid) {
            this.setState({
                className: 'error'
            })
        }
        this.props.onChangeMethod(event);
    }

    render() {
        const {type, name, placeholder, value, pattern, minLength, maxLength, errorMessage} = this.props;
        return(
            <div>
                <input type={type} name={name} placeholder={placeholder} value={value} pattern={pattern} minLength={minLength} maxLength={maxLength} onChange={this.inputValueChanged} required></input>
                <Error className={this.state.className} errorMessage={errorMessage}/>
            </div>
        );
    }
}

export default Input;