import {Container} from "@mui/material";
import {Button} from "antd";
import React from "react";

const CongratsPage = (props) => {
    const {setNextEnabled} = props;
    setNextEnabled(true);
    return (
        <Container maxWidth="md">
            <div id="surveyElement" style={{"display":"inline-block",width:"100%"}}>
                <div className="sv-root-modern">
                    <form>
                        <div className="sv-container-modern">
                            <div className="sv-body sv-completedpage"><h3>Congratulations!</h3>
                                <h5>Your response has been saved.</h5>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default CongratsPage;
