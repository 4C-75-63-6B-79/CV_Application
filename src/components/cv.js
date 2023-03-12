import React from "react";
import CVHeader from "./cv_header";

class CV extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <CVHeader />
            </div>
        )
    }
}

export default CV;