import React from 'react';
import { Steps, Button, message } from 'antd';
import {makeStyles} from "@mui/styles";
import TitleBar from "./TitleBar";
import s900To945 from "../surveys/WarmupSurvey.json"
import s945To1045 from "../surveys/IntroSurvey.json"
import s11To12 from "../surveys/s11To12.json"
import s1230To145 from "../surveys/s1230To145.json"
import s2To3 from "../surveys/s2To3.json"
import s315To430 from "../surveys/s315To430.json"
import SurveyComponent from "./SurveyComponent";
import CongratsPage from "./CongratsPage";
import WarmupStarter from "../markdowns/WarmupStarter";
import WarmupEnder from "../markdowns/WarmupEnder";
import IntroStarter from "../markdowns/IntroStarter";
import Start11To12 from "../markdowns/Start11To12";
import Start1230To145 from "../markdowns/Start1230To145";
import Start200To430 from "../markdowns/Start315To430";
import Start2To3 from "../markdowns/Start2To3";
import Start315To430 from "../markdowns/Start315To430";


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
    "1230-145": 3,
    "2-3": 4,
    "315-430": 5,
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
            />,
        },
        {
            title: '9:45-10:45',
            content:<SurveyComponent surveyJson={s945To1045}
                                     completedSurveyItemList={completedSurveyItemList}
                                     setCompletedSurveyItemList={setCompletedSurveyItemList}
                                     surveyItem="945-1045"
                                     setNextEnabled={setNextEnabled}
                                     starterComponent={<IntroStarter/>}
            />
        },
        {
            title: '11:00-12:00',
            content: <SurveyComponent surveyJson={s11To12}
                                      completedSurveyItemList={completedSurveyItemList}
                                      setCompletedSurveyItemList={setCompletedSurveyItemList}
                                      surveyItem="11-12"
                                      setNextEnabled={setNextEnabled}
                                      starterComponent={<Start11To12/>}

            />,
        },

        {
            title: '12:30 pm - 1:45 pm',
            content: <SurveyComponent surveyJson={s1230To145}
                                      completedSurveyItemList={completedSurveyItemList}
                                      setCompletedSurveyItemList={setCompletedSurveyItemList}
                                      surveyItem="1230-145"
                                      setNextEnabled={setNextEnabled}
                                      starterComponent={<Start1230To145/>}

            />,
        },


        {
            title: '2:00 pm - 3:00 pm',
            content: <SurveyComponent surveyJson={s2To3}
                                      completedSurveyItemList={completedSurveyItemList}
                                      setCompletedSurveyItemList={setCompletedSurveyItemList}
                                      surveyItem="2-3"
                                      setNextEnabled={setNextEnabled}
                                      starterComponent={<Start2To3/>}

            />,
        },


        {
            title: '3:15 pm - 4:30 pm',
            content: <SurveyComponent surveyJson={s315To430}
                                      completedSurveyItemList={completedSurveyItemList}
                                      setCompletedSurveyItemList={setCompletedSurveyItemList}
                                      surveyItem="315-430"
                                      setNextEnabled={setNextEnabled}
                                      starterComponent={<Start315To430/>}

            />,
        },
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
