import React, { useCallback, useMemo, useState } from 'react';
import Todos from './Todos';


const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};


function TodoContainer(props) {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const calculation = useMemo(() => { expensiveCalculation(count) }, [count]);


    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    console.log("parent rendered");
    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />

            <hr />
            <h2>Expensive Calculation</h2>
            {calculation}
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}

export default TodoContainer;