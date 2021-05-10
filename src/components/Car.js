
 function Car(props) {

    let {model, description, power, volume, xxx} = props;
console.log(xxx || 'hello');

    return (
        <div>
            <h2> {model} </h2>
            <p> {description}</p>
            <p>{power}</p>
            <p>{volume}</p>
            <div>{xxx}</div>

        </div>
    );
}


 export default Car;