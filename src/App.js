import './App.css';
import CharacterComponent from "./components/characters/character.component";


function App() {
    return (
        <div>

            <CharacterComponent
                description={'Cruise'}
                image={'https://i.pinimg.com/originals/f0/90/65/f09065f477acf4cc71c6da06742ce279.jpg'}/>
            <CharacterComponent
                description={'Statham'}
                image={'https://lrmonline.com/wp-content/uploads/2017/12/1491577576826.jpeg'}/>


        </div>
    );
}

export default App;
