import React, { createContext, useState } from 'react';

export const MyContext = createContext({});

const Provider = ({ children }: any) => {
    const [screenName, setScreenName] = useState({ screenName: "", isVisible: false });
    return (
        <MyContext.Provider value={{ ...screenName, setScreenName }}>
            {children}
        </MyContext.Provider>
    )
}

export default Provider;