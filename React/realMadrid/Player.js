import React from 'react'

const Player = ({ player }) => {
    
    return (
        <div className={`player ${isNaN(player.number) ? 'title' : ''}`}>
            <div className='number'>{player.number}</div>
            <div className='position'>{player.position}</div>
            <div className='name'>{player.name}</div>
            <div className='birth-date'>{player.birthDate}</div>
        </div>
    )
}

export default Player
