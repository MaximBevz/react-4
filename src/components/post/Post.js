export default function Post({info, allInfo}) {
    return (
        <div>
            {info.title} -
            {info.id}
            <button onClick={() => allInfo(info.id)}>Full info</button>
        </div>
    );
}