import React from 'react';
import { Steps, Button, message } from 'antd';
import {makeStyles} from "@mui/styles";
import TitleBar from "./TitleBar";
import s900To945 from "../surveys/s900To945.json"
import s945To1045 from "../surveys/s945To1045.json"
import SurveyComponent from "./SurveyComponent";
import CongratsPage from "./CongratsPage";
import Start900To945 from "../markdowns/Start900To945";
import End900To945 from "../markdowns/End900To945";
import SnapIntro from "./SnapIntro";


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
    "900-945": 0,
    "945-1045": 1,
    "11-12": 2,
    "1230-100": 3,
    "100-200": 4,
    "200-300": 5,
    "300-430": 6,
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
            title: '9:00-9:45',
            content: <SurveyComponent surveyJson={s900To945}
                                      completedSurveyItemList={completedSurveyItemList}
                                      setCompletedSurveyItemList={setCompletedSurveyItemList}
                                      surveyItem="900-945"
                                      setNextEnabled={setNextEnabled}
                                      starterComponent={<Start900To945/>}
                                      enderComponent={<End900To945/>}

            />,
        },
        {
            title: '9:45-10:45',
            content:<SurveyComponent surveyJson={s945To1045}
                                     completedSurveyItemList={completedSurveyItemList}
                                     setCompletedSurveyItemList={setCompletedSurveyItemList}
                                     surveyItem="945-1045"
                                     setNextEnabled={setNextEnabled}
                                     starterComponent={<SnapIntro/>}
            />
        },
        // {
        //     title: '11:00-12:00',
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
