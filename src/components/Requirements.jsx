import React from "react";
import {Container} from "@mui/material";
const Requirements = ( props ) => {
    const {setNextEnabled} = props;
    setNextEnabled(true);
    return (
        <>
            <Container maxWidth="md">
                <div className="h_iframe requirements_iframe">
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTZgpEE2dIZNKmho8Av7sKHOL2PWueFYJgYfHeXf0_sQRBbljDbtxMxhiegyF7CWIYiOQmeSJdeiTIp/pub?embedded=true"
                        frameborder="0" allowfullscreen
                ></iframe>
                </div>
            </Container>
        </>
)
}

export default Requirements;
