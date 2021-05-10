function Car(props) {

    let {model, description, year, power, volume} = props;


    return (
        <div>
            <h2> {model} {description}</h2>
            <p> {year}</p>
            <p> {power}</p>
            <p> {volume}</p>
        </div>


    );

}

export default Car;
