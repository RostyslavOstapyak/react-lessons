import React from 'react';
import useScroll from '../hooks/useScroll'

const List = () => {
    const [toDos, setToDos] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const limit = 20;
    const parentRef = React.useRef();
    const childrenRef = React.useRef();

    const fetchToDo = (page, limit) => {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setToDos(prev => [...prev, ...json])
                setPage(prev => prev + 1)
            })
    }

    const intesected = useScroll(parentRef, childrenRef, () => fetchToDo(page, limit))


    return (
        <ul
            ref={parentRef}
            style={{ height: '80vh', overflow: 'auto' }}
        >
            {toDos.map(toDo =>
                <li
                    key={toDo.id}
                    style={{ padding: 30, border: '2px solid black' }}
                >
                    {toDo.id}.
                    {toDo.title}
                </li>
            )}
            <div ref={childrenRef} style={{ height: 20, backgroundColor: 'green' }} />
        </ul>
    )
}

export default List;