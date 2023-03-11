function List(props) {
    const { list, onDeleteMusic } = props;
    const { title, signer } = list;

    return (
        <ul>
            <li>
                <h3>{title}</h3>
                <p>{signer}</p>
                <button onClick={onDeleteMusic}>삭제</button>
            </li>
        </ul>
    );
}

export default List;
