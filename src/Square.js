import React from 'react';

const style = {
    background: 'lightblue',
    border: '1px solid darkgreen',
    fontSize: '60px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({card, openCard}) => (
    <button
        style={style}
        onClick={() => openCard(card.id)}
    >
        {card.open ? card.emoji : null}
    </button>
)

export default Square;