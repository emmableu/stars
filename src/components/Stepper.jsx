import React from 'react';
import { Steps, Button, message } from 'antd';
import {makeStyles} from "@mui/styles";
import TitleBar from "./TitleBar";
import preSurveyJson from "../surveys/preSurveyJson.json";
import preAssessmentJson from "../surveys/preAssessmentJson.json";
import postAssessmentJson from "../surveys/postAssessmentJson.json";
import controlCondProgrammingWarmupJson from "../surveys/controlCondProgrammingWarmupJson.json";
import decompositionJson from "../surveys/decompositionJson.json";
import expDecompositionJson from "../surveys/expDecompositionJson.json";
import integrationJson from "../surveys/integrationJson.json";
import reflectionJson from "../surveys/reflectionJson.json";
import consentJson from "../surveys/consentJson.json";
import SurveyComponent from "./SurveyComponent";
import Requirements from "./Requirements";
import CongratsPage from "./CongratsPage";
import globalConfig from "../globalConfig";


const { Step } = Steps;


const useStyles = makeStyles( theme => ({
    stepsContent: {
        minHeight: 200,
        marginTop: 16,
        padding: "8px 8px",
        backgroundColor: "#fafafa",
        border: "1px dashed #e9e9e9",
        borderRadius: 2,
        maxHeight: `calc(100vh - ${180}px)`,
        overflow: "auto",
    },
    stepsAction: {
        marginTop: 12,
    }

}))

const surveyItemToCurrent = {
    "consent": 0,
    "presurvey": 2,
    "pretest": 3,
    "warmup": 4,
    "decomposition": 5,
    "integration": 6,
    "reflection": 7,
    "posttest": 8
}


const Stepper = () => {
    const classes = useStyles();
    const [nextEnabled, setNextEnabled] = React.useState(false);
    let localCompletedSurveyItemList = localStorage.getItem("completedSurveyItemList");
    let maxCur = 0;
    if (localCompletedSurveyItemList) {
        localCompletedSurveyItemList = JSON.parse(localCompletedSurveyItemList)
        for (const comp of localCompletedSurveyItemList) {
            const cur = surveyItemToCurrent[comp] + 1;
            if (cur > maxCur) {
                maxCur = cur;
            }
        }
    }
    else {
        localCompletedSurveyItemList = []
    }
    const [current, setCurrent] = React.useState(maxCur);
    const [completedSurveyItemList, setCompletedSurveyItemList] = React.useState(localCompletedSurveyItemList);

    const steps = [
        {
            title: 'Consent Form',
            content: <SurveyComponent surveyJson={consentJson}
                                      completedSurveyItemList={completedSurveyItemList}
                                      setCompletedSurveyItemList={setCompletedSurveyItemList}
                                      surveyItem="consent"
                                      setNextEnabled={setNextEnabled}
            />,
        },
        // {
        //     title: 'Requirements',
        //     content: <Requirements setNextEnabled={setNextEnabled}/>,
        // },
        // {
        //     title: 'Pre-Survey',
        //     content: <SurveyComponent surveyJson={preSurveyJson}
        //                               completedSurveyItemList={completedSurveyItemList}
        //                               setCompletedSurveyItemList={setCompletedSurveyItemList}
        //                               surveyItem="presurvey"
        //                               setNextEnabled={setNextEnabled}
        //
        //     />,
        // },
        // {
        //     title: 'Pre-Assessment',
        //     content: <SurveyComponent surveyJson={preAssessmentJson}
        //                               completedSurveyItemList={completedSurveyItemList}
        //                               setCompletedSurveyItemList={setCompletedSurveyItemList}
        //                               surveyItem="pretest"
        //                               starterComponent = {<div style={{margin: "10px 50px 10px 50px"}}>
        //                                   <p>Answer the assessments to the best of your knowledge. You do not need to get them correct in order to receive full credit. </p>
        //                                   <p><em>However, you will not receive full extra credit if we detect gaming the system - for example, progressing too quickly towards completion without reading the question text or deliberately thinking about the solution.</em></p>
        //                               </div>}
        //                               setNextEnabled={setNextEnabled}
        //
        //     />,
        // },
        // {
        //     title: 'Warm-Up',
        //     content: <SurveyComponent surveyJson={controlCondProgrammingWarmupJson}
        //                               completedSurveyItemList={completedSurveyItemList}
        //                               setCompletedSurveyItemList={setCompletedSurveyItemList}
        //                               surveyItem="warmup"
        //                               setNextEnabled={setNextEnabled}/>
        // },
        // {
        //     title: 'Decomposition',
        //     content:
        //         <SurveyComponent surveyJson={globalConfig.condition === "0"?decompositionJson:expDecompositionJson}
        //             completedSurveyItemList={completedSurveyItemList}
        //             setCompletedSurveyItemList={setCompletedSurveyItemList}
        //             surveyItem="decomposition"
        //             setNextEnabled={setNextEnabled}/>
        // },
        // {
        //     title: 'Integration',
        //     content: <SurveyComponent surveyJson={integrationJson}
        //                               completedSurveyItemList={completedSurveyItemList}
        //                               setCompletedSurveyItemList={setCompletedSurveyItemList}
        //                               surveyItem="integration"
        //                               setNextEnabled={setNextEnabled}/>,
        // },
        // {
        //     title: 'Reflection',
        //     content: <SurveyComponent surveyJson={reflectionJson}
        //                               completedSurveyItemList={completedSurveyItemList}
        //                               setCompletedSurveyItemList={setCompletedSurveyItemList}
        //                               surveyItem="reflection"
        //                               setNextEnabled={setNextEnabled}/>,
        // },
        // {
        //     title: 'Post-Assessment',
        //     content: <SurveyComponent surveyJson={postAssessmentJson}
        //                               completedSurveyItemList={completedSurveyItemList}
        //                               setCompletedSurveyItemList={setCompletedSurveyItemList}
        //                               surveyItem="posttest"
        //                               starterComponent = {<div style={{margin: "10px 50px 10px 50px"}}>
        //                                   <p>Answer the assessments to the best of your knowledge. You do not need to get them correct in order to receive full credit. </p>
        //                                   <p><em>However, you will not receive full extra credit if we detect gaming the system - for example, progressing too quickly towards completion without reading the question text or deliberately thinking about the solution.</em></p>
        //                               </div>}
        //                               setNextEnabled={setNextEnabled}/>
        // },
        {
            title: "Congratulations!",
            content: <CongratsPage setNextEnabled={setNextEnabled}/>
        }

    ];


    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <TitleBar/>
            <div style={{margin: "20px 40px"}}>
            <Steps current={current}
                   size="small"
            >
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className={classes.stepsContent}>{steps[current].content}</div>
            <div className={classes.stepsAction}>
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Back
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()} disabled={!nextEnabled}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Complete!')}>
                        Done
                    </Button>
                )}
            </div>
        </div>
        </>
    );
};

export default Stepper;
