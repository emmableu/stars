import React from 'react'
import { Checkbox } from 'antd';



const Start1230To145 = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return ( <>
        <h2 id="1-submit-your-pizza-preference">1. Complete 2 design tasks</h2>
        <ul>
            <li><p>Based on the <a href="">design requirements</a>, complete 2 design tasks.</p>
            </li>

            <li><p>Link to Idea Builder: <a href="https://isnap.csc.ncsu.edu/idea-builder-stars/">https://isnap.csc.ncsu.edu/idea-builder-stars/</a>.</p></li>
        </ul>

        <h2 id="3-complete-the-pre-survey">2. Complete a design survey (10 minutes)</h2>
    </> )
};

export default Start1230To145;
