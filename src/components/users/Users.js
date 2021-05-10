import {useEffect, useState} from 'react';
import User from "../user/User";
import './Users.css';
import axiosInstance from '../../services/api';


//                                    Т Е О Р І Я  'STATE LIFTING'
//                                (стан прокидується на рівень вище)
//
// useFffect дозволяє нам запустити один раз один єдиний сегмент коду. Цей сегмент коду робить наступне:
// він бере useState, setter і дані з "jsonplaceholder", які ми отримали. Ці дані показуємо в процесі ітераціі
// ось тут:  <div className={'users-box'}>
//                 {
//                     users.map((value) => <User
//                         key={value.id}
//                         item={value}
//                         search={search}/>)
//                 }
// викликаючи кожен раз окремий об'єкт User.
// В середині User в нас є 'button'. Цей "button" повинен характеримзуати, якого користувача ми клікнули. Але,
// справа в тому, що всі дані знаходяться в БАТЬКІВСЬКІЙ компоненті, а ось це -
//
//    function User({item, search}) {
//
//      return (
//          <div>
//              {item.id} -
//              {item.name} -
//              {item.email};
//
//              <button onClick={() => search(item.id)}>details</button>
//
//          </div>
//      );
//  }
//  export default User;
//
//  - є ДОЧІРНЯ КОМПОНЕНТА. Як можна прокинути батьківську логіку
//
//   const search = (id) => {
//         let findedUser = users.find(value => value.id === id);
//         console.log(findedUser);
//         setSingleUser(findedUser)
//     }
//
// до дочірньої компоненти
//
// return (
//          <div>
//            {item.id} -
//              {item.name} -
//              {item.email};
//
//              <button onClick={() => search(item.id)}>details</button>
//         </div>
//  ???
//
//  Власно кажучи, ми створюємо з вами функцію, яка буде приймати ідентифікатор (id)
//  і цю функцію через props просто напросто передаємо.
//  В мене props називаэться "search" (в User.js). Відповідно і в (Users.js)
//  вона називаэться "search"
//      <div className={'users-box'}>
//                 {
//                     users.map((value) => <User
//                         key={value.id}
//                         item={value}
//                         search={search}/>)
//                 }
//    І після того, як ми клікаємо на button, наша батьківська функція в контексті
//   дочірнього компонента заповнюється поточними ідентифікаторами об'єкта і
//    повертається назад, і, відповідно, ми цей ідентифікатор об'єкта використовуємо
//    для того, щоб знайти з нашого масиву певного користувача. Після того, як ми
//    ми знайшли з масиву цього користувача, ми беремо наступний useState, впроваджуємо
//    якісь дані початкові і, власно кажучи, впроваджуємо обраного користувача (choosen 1)
//    і відображаємо його ось тут:
//
//  <div className={'single-user-box'}>
//                 {
//                     // JSON.stringify(singleUser)
//                     //      OR
//                     // singleUser && <h2>{singleUser.id} - {singleUser.name}</h2>
//                     //     OR
//                     //  <h2>{singleUser?.id} - {singleUser?.name}</h2>
//                     //       OR
//                     singleUser ? (<h2>{singleUser.id} - {singleUser.name}</h2>) : (<div>user not defined</div>)
//                 }
//             </div>
//
//





function Users(input, init) {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);

    useEffect(() => {
   axiosInstance.get('/users').then(value => setUsers([...value.data]));
    }, []);


    // const search = (id) => {
    //     let singleUser = users.find(value => value.id === id);
    //     console.log(singleUser);
    // }
    //       OR
    const search = (id) => {
        let findedUser = users.find(value => value.id === id);
        console.log(findedUser);
        setSingleUser(findedUser)
    }


    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map((value) => <User
                        key={value.id}
                        item={value}
                        search={search}/>)
                }

            </div>

            <div className={'single-user-box'}>
                {
                    // JSON.stringify(singleUser)
                    //      OR
                    // singleUser && <h2>{singleUser.id} - {singleUser.name}</h2>
                    //     OR
                    //  <h2>{singleUser?.id} - {singleUser?.name}</h2>
                    //       OR
                    singleUser ? (<h2>{singleUser.id} - {singleUser.name}</h2>) : (<div>user not defined</div>)
                }
            </div>


        </div>
    );
}

export default Users;
 