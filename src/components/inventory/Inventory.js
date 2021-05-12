import {getInventory} from "../../services/api.services";
import {useState, useEffect} from 'react';
import InventoryItem from '../inventory-item/InventoryItem';
import InventoryFullInfo from "../inventory-full-info/InventoryFullInfo";
import './Inventory.css';
import {Route, Switch} from "react-router-dom";


export default function Inventory({match:{url}}) {
    let [inventory, setInventory] = useState([]);

    useEffect(() => {
        getInventory().then(val => setInventory([...val.data]));
    }, []);

    return (
        <div className='inventory'>
            <div className='inventory-main'>
                <h1>Inventory</h1>
                {
                    inventory.map(item => <InventoryItem key={item.id} info={item} url={url}/>)
                }
            </div>
            <Switch>
                <Route path={`${url}/:InventId`} component={InventoryFullInfo}/>
            </Switch>
        </div>
    );
}