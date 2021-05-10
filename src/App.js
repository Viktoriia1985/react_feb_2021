import Car from "./components/Car";


function App() {
    return (

        <div>

            <Car
                model={'BMW'}
                description={'x3'}
                power={260}
                volume={2.4}
            />


            <Car
                model={'BMW'}
                description={'x5'}
                power={350}
                volume={3.4}
            />

            <Car
                model={'BMW'}
                description={'x6'}
                power={560}
                volume={5}
            />


        </div>

    );
}

export default App;