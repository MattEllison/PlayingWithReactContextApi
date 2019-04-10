
import React from 'react';
import AppContext from './Context';

export function withAppcontext(Component) {
    return function WrapperComponent(props) {
        return (
            <AppContext.Consumer>
                {state => <Component {...props} context={state} />}
            </AppContext.Consumer>
        )
    }
}
