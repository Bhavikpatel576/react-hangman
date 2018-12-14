import React from 'react';

const Score = (props) => {
    return (
        <div>
            <h1>
                Check out your top scores:
            </h1>
                <table>
                    <tr>
                        <th>Game</th>
                        <th>Score</th>
                    </tr>
                    {props.scores.map((score, idx)=>{
                        return(
                            <tr>
                                <td>Game: {idx}</td>
                                <td>{score}</td>
                            </tr>
                        )
                    })}
                </table>

        </div>
    )
}

export default Score 