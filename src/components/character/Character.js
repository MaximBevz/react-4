import {Link} from 'react-router-dom';

export default function Character({item, url, allCharacters}) {

    let newId = allCharacters.findIndex(el=> el === item);

    let name = item.name ? item.name : '';

    let id = item.id ? item.id : newId + 1;

    return (
        <div>
            <h4>{id} | {name.first || 'No name'} | {name.middle || 'No middle name'} | {name.last || 'No last name'}</h4>
            <span>Have age: {item.age || 'No Age'}</span>
            <p>This character come from : {item.homePlanet || 'Unknown planet'}</p>
            <Link to={url + '/' + id}>More info</Link>
        </div>
    );
}