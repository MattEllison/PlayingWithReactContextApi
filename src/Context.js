import React from 'react';

const UserContext = React.createContext({
    title: '',
    count: 0,
    addOne: () => { }
});

export default UserContext;
