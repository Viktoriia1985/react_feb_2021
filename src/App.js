// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Users from "./components/users/Users";


function App() {

    let [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(++counter);
    };

    const decrement = () => {
        setCounter(--counter);
    };

    const reset = () => {
        setCounter(0);
    };

    return (
        <div>
            <div>
                <h2>state is - ${counter}</h2>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>
            <h1></h1>

            <div>
                <Users/>
            </div>

        </div>
    );
}

export default App;
