import React, { use } from 'react';

const Todos = ({todosFetch}) => {
    const todosData = use(todosFetch);
    
    return (
        <div>
            <h1>Todos: {todosData.length}</h1>
        </div>
    );
};

export default Todos;