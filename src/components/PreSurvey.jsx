import React  from "react";
import * as Survey from "survey-react";
import surveyJson from "../surveys/preSurveyJson.json";


Survey.StylesManager.applyTheme("modern");


const PreSurvey = () => {
    const survey = new Survey.Model(surveyJson);

    function sendDataToServer(survey) {
        //send Ajax request to your web server.
        alert("The results are:" + JSON.stringify(survey.data));
    }

    return (
        <Survey.Survey model={survey}  onComplete={ sendDataToServer } />
    )
}

export default PreSurvey;
