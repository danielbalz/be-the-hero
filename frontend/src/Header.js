import React from 'react';

// É possível passar o nome da propriedade diretamente no parâmetro: ex {title}
export default function Header({children}) {
    return (
        <header>
            <h1> {children} </h1>
        </header>
    );
}