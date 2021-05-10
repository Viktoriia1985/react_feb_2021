// import logo from './logo.svg';
import './App.css';
import Car from "./components/User/Car";
import {useState} from 'react';


let carsList = [
    {model: 'bmw', description: 'x3', year: 2016, power: 255, volume: 2},
    {model: 'bmw', description: 'x5', year: 2016, power: 260, volume: 3.4},
    {model: 'bmw', description: 'x6', year: 2018, power: 280, volume: 5},
    {model: 'mazda', description: '3', year: 2017, power: 200, volume: 1.5},
    {model: 'mazda', description: '6', year: 2019, power: 240, volume: 2},
    {model: 'jeep', description: 'compass', year: 2018, power: 240, volume: 2},
]

function App() {

    let [cars, setCars] = useState(carsList);
    const deleteCar = () => {
        carsList.pop();

        setCars([...cars])
        console.log(carsList);
    };


    let [counter, setCounter] = useState(0);
    const increment = () => {
        counter++;
        setCounter(counter);
        console.log(counter);
    };


    return (
        <div>

            <div>
                counter is {counter}
                <button onClick={increment}>increment</button>

            </div>


            {
                carsList.map((value, index) =>
                    <Car key={index}
                         {...value}
                         model={value.model}
                         description={value.description}
                         year={value.year}
                         power={value.power}
                         volume={value.volume}
                    />
                )
            }

            <button onClick={deleteCar}>delete car</button>


        </div>
    );
}

export default App;

