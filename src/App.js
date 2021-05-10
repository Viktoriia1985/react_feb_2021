// import logo from './logo.svg';
import './App.css';
import User from "./components/User/User";
import {useState} from 'react';


let userList = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false}
];


// Ітерація в React відбувається згідно функції map (в якому є вже цикл та return)
// Callback function приймають 3 аргументи: ітеруємий об'єкт, індекс цього об'кта та масив, що
// ітерується

// let map = userList.map((user, index) => {
//   user.id = index;
//   return user;
// });
// console.log(map);

           /*{
                userList.map(value => <h3> {value.name} - {value.age} - {value.status.toString()} </h3>)
            }

            {
                userList.map((value, index) => <h3
                    key={index}>{value.name} - {value.age} - {value.status.toString()} </h3>)
            }*/


function App() {

    let [users, setUsers] = useState(userList);
    const deleteUser = () => {

        users.pop();
        setUsers([...users]);
        console.log('Ho-ho')

        // OR
        //
        // setUsers(prevState => {
        //
        //     let newUsers = JSON.parse(JSON.stringify(prevState))
        //     newUsers.pop();
        //
        //     return newUsers;
        // });
        // console.log('hello');

    };
///////////////////////////////////////////////////////////////////////////////

    // let [counter, setCounter] = useState(0);
    // const increment = () => setCounter(++counter);
    /////             OR
    let [counter, setCounter] = useState(0);

    const increment = () => {
        counter++;
        setCounter(counter);
        console.log(counter);
    };

    return (
        <div>

            {/*    {
                userList.map((value, index) =>
                    <User key={index}
                          name={value.name}
                          age={value.age}
                          status={value.status}
                    />)
            }*/}


            {/*//   ДЕСТРУКТУРИЗАЦІЯ*/}

            <div>
                counter is {counter}
                <button onClick={increment}> increment</button>

            </div>
            {
                users.map((value, index) =>
                    <User key={index}
                          {...value}
                    />
                )
            }
            <button onClick={deleteUser}> delete user</button>

        </div>
    );
}

export default App;
