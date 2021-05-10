import {getUsers, getUser} from "../../services/api.services";
import {useEffect, useState} from 'react';
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState(null);

    useEffect(() => {
        getUsers().then(val => setUsers([...val.data]));
    }, []);

    const infoUser = (id) => {setSingleUser(users.find(el => el.id === id))}

    return (
        <div>
            <h1>Users</h1>
            <h2>{singleUser ? singleUser : 'Click on User'}</h2>
            {
                users.map(item => <User key={item.id} item={item} infoUser={infoUser}/>)
            }
        </div>
    );
}