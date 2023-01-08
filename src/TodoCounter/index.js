import React from 'react';
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos, loading}){

    return(
        <h2 
            className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
            Has Completado {completedTodos} de {totalTodos} TODOs
        </h2>
    );
}

export { TodoCounter };