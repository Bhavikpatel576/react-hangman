import './index.css'

import React from 'react';

const Winner = (props) => {
    const lost = props.gameResult
    if (lost) {
        return (
            <div>Lost</div>
        )
    } else {
        return (
            <div>Winner</div>
        )
    }
}

export default Winner