import {Link} from "react-router-dom";

export default function InventoryItem({info, url}) {

    return (
        <div>
            {info.id} - {info.title} => <Link to={`${url}/${info.id}`}>Full info</Link>
        </div>
    );
}