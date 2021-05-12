import {getCharacterFullInfo} from "../../services/api.services";
import {useEffect, useState} from 'react';
import './CharacterInfo.css';

export default function CharacterInfo({characterId}) {

    let [characterInfo, setCharacterInfo] = useState('');

    useEffect(() => {
        getCharacterFullInfo(characterId).then(val => setCharacterInfo({...val.data}));
    }, []);

    let validInfo = characterInfo ? characterInfo : 'No Info';

    return (
        <div className='character-info'>
            <div className='character-info-main'>
                {validInfo.name ?
                    <h2>
                        <span>{validInfo.id}. </span>
                        {validInfo.name.first} - {validInfo.name.middle} - {validInfo.name.last}</h2> :
                    'No Info'}
                <img src={validInfo.images ? validInfo.images.main : 'No photo'} alt=""/>
            </div>
            <div className='character-info-phrases'>
                <h4>All phrases:</h4>
                <ul>
                    {
                        validInfo.sayings ? validInfo.sayings.map((phrase, i) => <li key={i}>{phrase}</li>) : 'No phrases!'
                    }
                </ul>
            </div>
        </div>
    );
}