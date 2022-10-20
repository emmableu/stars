import surveyJson from "../surveys/preAssessmentJson.json";
import * as Survey from "survey-react";
import React from "react";

Survey.StylesManager.applyTheme("modern");


const PreAssessment = () => {
    const survey = new Survey.Model(surveyJson);

    function sendDataToServer(survey) {
        //send Ajax request to your web server.
        alert("The results are:" + JSON.stringify(survey.data));
    }

    return (
        <Survey.Survey model={survey}  onComplete={ sendDataToServer } />
    )
}

export default PreAssessment;
