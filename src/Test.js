import React from 'react';
import UserContext from './Context';

const test = () => {
    return <UserContext.Consumer>
        {({ user }) => (
            <div className="user-stats">
                What -> {user}
            </div>
        )}
    </UserContext.Consumer>
}

export default test;