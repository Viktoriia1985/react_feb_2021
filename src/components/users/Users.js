import User from "../user/User";
import {useState} from 'react';


function Users() {

    let [users, setUsers] = useState([
        {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 16}},
        {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
        {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 121}},
        {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 90}},
        {id: 5, name: 'max', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 115}},
        {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
        {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 22}},
        {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 43}}
    ]);

    const popUser = () => {
        users.pop();
        setUsers([...users]);
    };

    return (
        <div>

            {
                users.map(value => <User key={value.id} item={value}/>)
            }

            <button onClick={popUser}>pop user</button>

        </div>
    );
}

export default Users;
