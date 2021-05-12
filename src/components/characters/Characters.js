import {getCharacters} from "../../services/api.services";
import {useEffect, useState} from 'react';
import Character from "../character/Character";

export default function Characters({match:{url}}) {

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(val => setCharacters([...val.data]));
    }, []);

    return (
        <div>
            <h1>Characters</h1>
            {
                characters.map((item, i, arr) => <Character key={i} item={item} url={url} allCharacters={arr}/>)
            }
        </div>
    );
}