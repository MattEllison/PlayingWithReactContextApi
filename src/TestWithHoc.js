import React from 'react';
import { withAppcontext } from './withAppContext'


const test = (props) => {
    console.log(props)
    return <div>
        <h1>Test with Hoc</h1>
        <div className="user-stats">
            What -> {props.context.user}
        </div>

    </div>
}

export default withAppcontext(test);