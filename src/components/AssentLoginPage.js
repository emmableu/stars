import {makeStyles} from "@mui/styles";
import React from "react";
import Cookies from "js-cookie";
import {Container, CssBaseline, Paper, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {setUserId} from "../redux/features/userIdSlice";
import Assent from "./Assent";
import { Input, Radio, Space, Modal, Button} from 'antd';
import {  message, Steps } from 'antd';
import {Api} from "../api";
import globalConfig from "../globalConfig";
const { Step } = Steps;
const { confirm } = Modal;

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


const AssentLoginPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [curUserId, setCurUserID] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [isConsent, setIsConsent] = React.useState("true")
    const [loading, setLoading] = React.useState(false);

    const onChange = (e) => {
        // console.log('radio checked', e.target.value);
        setIsConsent(e.target.value);
    };

    const sendUserInit = (e) => {
        setLoading(true);
        Api.generateUserId({name, "consent": isConsent}).then(async r => {
            localStorage.setItem('mmdd', globalConfig.mmdd)
            await new Promise(r => setTimeout(r, 100));
            setCurUserID(r.data);
            dispatch(setUserId(r.data));
            setLoading(false);
        })

    }

    const confirmConsent = () => {
        if (isConsent === "true") {
            sendUserInit()
        }
        else {
            confirm({
                title: 'Are you sure you want to submit this form?',
                content: 'This action is irreversible.',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    // Api.
                    sendUserInit()
                },
                onCancel() {
                    // // globalLog('Cancel');
                },
            });
        }
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
                            <br />
                            <br />
                            <br />

                           <p style={{fontSize: 13}}> By typing your name below, this means that you have read this form or have had it read to you and understand your chosen participation in the study. </p>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="userId"
                                label="Type your full name:"
                                name="userId"
                                autoComplete="userId"
                                autoFocus
                                onInput={ e => setName(e.target.value)}
                            />
                            <Button
                                type="primary"
                                className={classes.submit}
                                onClick={confirmConsent}
                                loading={loading}
                            >
                                Submit
                            </Button>

                        </Paper>
                    </Container>
    );
};


// const AssentLoginPage = (props) => {
//
//
//     return (
//         <Container component="main" maxWidth="xs" style={{display: "flex",
//             justifyContent: 'center',
//             flexDirection: "column",
//             alignItems: "center",
//             height: "100vh"
//         }}>
//             <CssBaseline />
//             <Paper
//                 elevation={8}
//                 className={classes.paper}>
//                 <Typography component="h1" variant="h6" style={{color: "#616161"}}>
//                     {'\u00A0'} Programming Study
//                 </Typography>
//                 <Assent/>
//                 <Radio.Group onChange={onChange} value={isConsent}>
//                     <Space direction="vertical">
//                         <Radio value={"true"}>Yes, I agree to participate in this study and share my results with the research team.</Radio>
//                         <Radio value={"false"}>No, I do not agree to participate in this study nor share my results with the research team.</Radio>
//                     </Space>
//                 </Radio.Group>
//                 <br />
//                 <Typography component="h1" variant="subtitle2" className={classes.instruction}>
//                     Sign in using your unity ID
//                 </Typography>
//                 <form className={classes.form} noValidate>
//                     <TextField
//                         variant="outlined"
//                         margin="normal"
//                         required
//                         fullWidth
//                         id="userId"
//                         label="Unity ID"
//                         name="userId"
//                         autoComplete="userId"
//                         autoFocus
//                         onInput={ e => setCurUserID(e.target.value.toLowerCase())}
//                     />
//                     <Button
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         className={classes.submit}
//                         onClick={login}
//                     >
//                         Sign In
//                     </Button>
//                 </form>
//             </Paper>
//         </Container>
//     );
// }

export default AssentLoginPage;
