import * as Survey from "survey-react";
import React from "react";
import {Container} from "@mui/material";
import { Button } from 'antd';
import globalConfig from "../globalConfig";
import {Api} from "../api";

Survey.StylesManager.applyTheme("modern");


const SurveyComponent = (props) => {
    const {surveyJson, setCompletedSurveyItemList, completedSurveyItemList, surveyItem, setNextEnabled, starterComponent} = props;
    setNextEnabled(completedSurveyItemList.includes(surveyItem))
    const survey = new Survey.Model(surveyJson);
    const [isReSubmit, setIsReSubmit] = React.useState(false);
    function sendDataToServer(survey) {
        //send Ajax request to your web server.
        // alert("The results are:" + JSON.stringify(survey.data));
        Api.e115Update(surveyItem, survey.data);
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

    const handleClickReset = () => {
        setIsReSubmit(true);
        const l = [...completedSurveyItemList]
        const idx = l.indexOf(surveyItem);
        console.log(idx);
        if (idx > -1) {
            l.splice(idx, 1);
            localStorage.setItem("completedSurveyItemList", JSON.stringify(l));
            setCompletedSurveyItemList(l);
        }
    }

    return (
        <>
        {completedSurveyItemList.includes(surveyItem) ?
                <Container maxWidth="md">
                    <div id="surveyElement" style={{"display":"inline-block",width:"100%"}}>
                        <div className="sv-root-modern">
                            <form>
                                <div className="sv-container-modern">
                                    <div className="sv-body sv-completedpage"><h3>Thank you for completing the form.</h3>
                                        <h5>Please go to
                                             <a target="_blank" href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU5RR2xJOTFoTTNrfGRlZmF1bHR8YWE0NTIzMDk5OTc2Njc1YWUzOGEwMGYyYWUwYTAwNTY">Google Calendar</a> to book a meeting with us.
                                        </h5>
                                        <h6>
                                            <h6>

                                            If there're no meeting slots available on the Google Calendar, please check if there're any in the next few weeks.
                                            </h6>
                                            <h6>
                                                If you still couldn't find any, please send us an email at
                                            wwang33@ncsu.edu, and we will work with you to find another time.
                                            </h6>
                                        </h6>
                                        <Button type="primary" onClick={handleClickReset}> Submit Another Response</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
                :
                <Container maxWidth="md">
                    {starterComponent && starterComponent}
                    <Survey.Survey model={survey}  onComplete={ sendDataToServer } />
                </Container>

        }

        </>
    )
}

export default SurveyComponent;
