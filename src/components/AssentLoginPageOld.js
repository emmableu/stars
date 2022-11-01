import {makeStyles} from "@mui/styles";
import React from "react";
import Cookies from "js-cookie";
import {Button, Container, CssBaseline, Paper, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {setUserId} from "../redux/features/userIdSlice";
import Assent from "./Assent";
import { Input, Radio, Space } from 'antd';
import {  message, Steps } from 'antd';
const { Step } = Steps;

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        width: "900px",
        padding: "40px",
        height: "90vh",
        overflow: "scroll",
    },
    ideaBuilderIcon: {
        fontSize: 20,
    },
    instruction: {
        color: "grey",
        fontStyle: "italic",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: 10,
    },
    submit: {
        margin: "10px 10px",
    },
}));



const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];
const AssentLoginPageOld = () => {
    const [current, setCurrent] = React.useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <>
            <Steps current={current}>
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};


const AssentLoginPage = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [curUserId, setCurUserID] = React.useState(null);
    const [isConsent, setIsConsent] = React.useState(null)

    const onChange = (e) => {
        // console.log('radio checked', e.target.value);
        setIsConsent(e.target.value);
    };

    const login = async (e) => {
        if (curUserId === null) {
            return;
        }
        localStorage.setItem("userId", curUserId);
        await new Promise(r => setTimeout(r, 100));
        dispatch(setUserId(curUserId));
    }

    return (
        <Container component="main" maxWidth="xs" style={{display: "flex",
            justifyContent: 'center',
            flexDirection: "column",
            alignItems: "center",
            height: "100vh"
        }}>
            <CssBaseline />
            <Paper
                elevation={8}
                className={classes.paper}>
                <Typography component="h1" variant="h6" style={{color: "#616161"}}>
                    {'\u00A0'} Programming Study
                </Typography>
                <Assent/>
                <Radio.Group onChange={onChange} value={isConsent}>
                    <Space direction="vertical">
                        <Radio value={"true"}>Yes, I agree to participate in this study and share my results with the research team.</Radio>
                        <Radio value={"false"}>No, I do not agree to participate in this study nor share my results with the research team.</Radio>
                    </Space>
                </Radio.Group>
                <br />
                <Typography component="h1" variant="subtitle2" className={classes.instruction}>
                    Sign in using your unity ID
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userId"
                        label="Unity ID"
                        name="userId"
                        autoComplete="userId"
                        autoFocus
                        onInput={ e => setCurUserID(e.target.value.toLowerCase())}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={login}
                    >
                        Sign In
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default AssentLoginPageOld;
