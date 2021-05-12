import {getInventoryFullInfo} from "../../services/api.services";
import {useEffect, useState} from 'react';
import './InventoryFullInfo.css';

export default function InventoryFullInfo({match:{params:{InventId}}}) {

    let [inventoryInfo, setInventoryInfo] = useState(null);

    useEffect(() => {
        getInventoryFullInfo(InventId).then(val => setInventoryInfo({...val.data}));
    }, []);

    // console.log(inventoryInfo);

    return (


        <div className='inventory-full-info'>
            <h4>{inventoryInfo?.title ? inventoryInfo.title : 'no title'} - {inventoryInfo?.id ? inventoryInfo.id : 'no id'}</h4>
            <span>{inventoryInfo?.category ? inventoryInfo?.category : 'no category'}</span>
            <p>{inventoryInfo?.description ? inventoryInfo?.description : 'no description'}</p>
        </div>
    );
}