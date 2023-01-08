import React from "react";

const EmptySearchResult = (props) => {
    return(
        <p>No se encontraron resultados para: {props.searchValue}</p>
    );
}

export { EmptySearchResult };