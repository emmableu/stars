import React from 'react'
import { Checkbox } from 'antd';



const Start900To945 = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return ( <>
        <h2 id="1-submit-your-pizza-preference">1. Submit your pizza preference</h2>
        <p>Submit your preference for pizza in <a href="https://forms.gle/eSpFUKxPLckk5eQh6">this form</a></p>
            <p>  We will order the pizza for lunch based on your preference. </p>
        <h2 id="2-find-your-user-id-on-the-top-right-of-this-site-">2. Find your user id on the top right of this site:</h2>
        <p><img width="300" alt="image" src="https://user-images.githubusercontent.com/41789327/197143992-03611623-0004-490a-8046-c01d2c9565d3.png"/></p>
        <p>It should look like a <code>city name + today&#39;s date</code>, such as: <code>raleigh1022</code></p>
        <p>This is your <strong>unique user ID</strong>. To protect your privacy, please use this user id, <em>not your own name</em>, to sign up to all softwares that we will use today. </p>
        <p>Create a folder under this directory under your new user id (<code>a unique city name + today&#39;s date</code>):</p>
        <ul>
            <li><p><a href="https://drive.google.com/drive/folders/14A-QhaEfnojt_4e754Y4Y9u5NPDu9hEs?usp=sharing">https://drive.google.com/drive/folders/14A-QhaEfnojt_4e754Y4Y9u5NPDu9hEs?usp=sharing</a></p>
            </li>
        </ul>
        <Checkbox onChange={onChange}>I confirm that I have created a new directory under my name. </Checkbox>
        <p></p>

        <h2 id="3-complete-the-pre-survey">3. Complete the pre-survey</h2>
    </> )
};

export default Start900To945;
