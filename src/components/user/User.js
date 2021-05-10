 function User({item, search}) {

     return (
         <div>
             {item.id} -
             {item.name} -
             {item.email};

             <button onClick={() => search(item.id)}>details</button>

         </div>
     );
 }
 export default User;
