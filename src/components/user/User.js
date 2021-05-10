export default function User({item, infoUser}) {
    return (
        <div>
            {item.username} -
            {item.id}
            <button onClick={() => infoUser(item.id)}>info</button>
        </div>
    );
}