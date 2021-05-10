import './character.style.css'

function CharacterComponent (props) {
    console.log(props);

    // let cls = '';
    // if (props.description === 'Cruise') {
    //     cls = 'Cruise-class'
    // } else {
    //     cls = 'Statham-class';
    // }

    let cls = props.description === 'Cruise' ? 'Cruise-class' : 'Statham-class';

    return    <div className={cls}>

        <h1>

            {props.description}

        </h1>

        <img
            src={props.image}
            alt=""/>



    </div>
}



export default CharacterComponent;