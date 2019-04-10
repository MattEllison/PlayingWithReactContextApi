import React, { Component } from 'react';
import UserContext from './Context';
export default class HelloWorld extends Component {
    static contextType = UserContext;
    state = {
        count: 0,

    }
    render() {
        console.log("this context is ", this.context);
        return <UserContext.Consumer>
            {
                (store) => {
                    console.log('store', store)
                    return <div>
                        <h1>Hello World - {store.user}</h1>
                        <p>{this.context.count}</p>
                        <button onClick={() => {
                            this.setState({ count: this.state.count + 1 })
                        }}>Add 1</button>
                        <button onClick={() => {
                            store.addOne();

                        }}>Another Click</button>
                    </div>
                }
            }
        </UserContext.Consumer>
    }
}