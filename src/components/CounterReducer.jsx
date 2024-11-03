import React, { useReducer } from 'react';

function CounterReducer(props) {
    // action is an object which has two properties - type and payload. Payload is optional
    //{type:"INCREMENT", payload: 5}

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT": return state + 1;
            case "DECREMENT": return state - 1;
            case "RESET": return 0;
            case "INCREMENTBYVALUE": return state + action.payload;
            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>Decrement</button>
            <button onClick={() => { dispatch({ type: "RESET" }) }}>Reset</button>
            <button onClick={() => { dispatch({ type: "INCREMENTBYVALUE", payload: 6 }) }}>Increment By Value</button>
        </div>
    );
}

export default CounterReducer;