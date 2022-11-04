import {makeStyles} from "@mui/styles";
import React from "react";
import Cookies from "js-cookie";
import {Button, Container, CssBaseline, Paper, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setUserId} from "../redux/features/userIdSlice";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: "100px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "380px",
        padding: "40px",
    },
    ideaBuilderIcon: {
        fontSize: 20,
    },
    instruction: {
        color: "black",
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


const Announcer = (props) => {
    const classes = useStyles();
    const userId = useSelector(s => s.userId.data);

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper
                    elevation={8}
                    className={classes.paper}>
                    <Typography component="h1"  className={classes.instruction}>
                        <p> You have already signed in.</p>
                        <p> Your user ID is {userId} </p>
                    </Typography>
                </Paper>
            </Container>
    );
}

export default Announcer;
