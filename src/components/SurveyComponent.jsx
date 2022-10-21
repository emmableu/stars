import * as Survey from "survey-react";
import React from "react";
import {Container} from "@mui/material";
import { Button } from 'antd';
import globalConfig from "../globalConfig";
import {Api} from "../api";

Survey.StylesManager.applyTheme("modern");


const SurveyComponent = (props) => {
    const {surveyJson, setCompletedSurveyItemList, completedSurveyItemList, surveyItem, setNextEnabled, starterComponent, enderComponent} = props;
    setNextEnabled(completedSurveyItemList.includes(surveyItem))
    const survey = new Survey.Model(surveyJson);
    const [isReSubmit, setIsReSubmit] = React.useState(false);
    function sendDataToServer(survey) {
        //send Ajax request to your web server.
        // alert("The results are:" + JSON.stringify(survey.data));
        Api.starsUpdate(surveyItem, survey.data);
        const newList = [surveyItem, ...completedSurveyItemList]
        localStorage.setItem("completedSurveyItemList", JSON.stringify(newList));
        setCompletedSurveyItemList(newList);
    }
    React.useEffect(
        () => {
            console.log("completedSurveyItemList: ", completedSurveyItemList);
            console.log("surveyItem: ", surveyItem);
            console.log("isReSubmit: ", isReSubmit);
            if (globalConfig.testing || isReSubmit) {
                setNextEnabled(true); // version for testing
            }
            else {
                setNextEnabled(completedSurveyItemList.includes(surveyItem)); // version for the study
            }
        },
        [completedSurveyItemList, setNextEnabled]
    )



    return (
        <>
            <Container maxWidth="md">
                {starterComponent && starterComponent}
                        {completedSurveyItemList.includes(surveyItem) ?
                            <Container maxWidth="md">
                                <div id="surveyElement" style={{"display": "inline-block", width: "100%"}}>
                                    <div className="sv-root-modern">
                                        <form>
                                            <div className="sv-container-modern">
                                                <div className="sv-body sv-completedpage" style={{padding:20, height:150}}><h6>Thank you for completing
                                                    the form.</h6>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Container>
                            :
                            <Survey.Survey model={survey} onComplete={sendDataToServer}/>
                        }
                <p></p>
                    {enderComponent && enderComponent}
                </Container>
        </>
    )
}

export default SurveyComponent;
