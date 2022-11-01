import React from 'react'
import { Checkbox } from 'antd';
import {TextField} from "@mui/material";



const WarmupStarter = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return ( <div style={{padding:25}}>
        {/*<h2 id="1-submit-your-pizza-preference">1. Submit your pizza preference</h2>*/}
        {/*<p>Submit your preference for pizza in <a href="https://forms.gle/eSpFUKxPLckk5eQh6">this form</a></p>*/}
        {/*    <p>  We will order the pizza for lunch based on your preference. </p>*/}
        <h2 id="2-find-your-user-id-on-the-top-right-of-this-site-">1. Find your user id on the top right of this site:</h2>
        <p><img width="300" alt="image" src="https://user-images.githubusercontent.com/41789327/197143992-03611623-0004-490a-8046-c01d2c9565d3.png"/></p>
        <p>It should look like a <code>city name + today&#39;s date</code>, such as: <code>raleigh1022</code></p>
        <p>This is your <strong>unique user ID</strong>. To protect your privacy, please use this user id, <em>not your own name</em>, to sign up to all softwares that we will use today. </p>

        <p> Please type your unique user ID below, and confirm that you have understood to use this user id, <em>not your own name</em>, to sign up to all softwares that we will use today. </p>

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userId"
            label="My new user ID"
            name="userId"
            autoComplete="userId"
            autoFocus
        />
        <Checkbox onChange={onChange}>I confirm that I will be using this unique user id today. </Checkbox>
        <p></p>

        <h2 id="3-complete-the-pre-survey">2. Complete the pre-survey</h2>
    </div> )
};

export default WarmupStarter;
