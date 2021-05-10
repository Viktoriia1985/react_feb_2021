function User({item}) {

    return (
        <div>
            <h1>{item.id} - {item.name} - {item.age}</h1>
            <div>
                city - {item.address.city}
                <br/>
                street - {item.address.street}
                <br/>
                house№ - {item.address.number}
            </div>

        </div>
    );
}

export default User;
