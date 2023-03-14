import React from "react";





const CVEducation = ({ information }) =>

    <div>
        <h3>{information['University Name']} , {information['City']}</h3>
        <p>{information['From']} - {information['To']}</p>
        <p>{information['Subject']}, {information['Degree']}</p>
    </div>;





export default CVEducation;
