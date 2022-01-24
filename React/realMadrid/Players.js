import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Player from './Player'

const Players = () => {

    const TITLE = {        
        number: "No.",
        position: "Pos.",
        name: "Player",
        birthDate: "Birth Date"
    }

    const [players, setPlayers] = useState([])

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const playersData = require('./players.json').players
        setPlayers(playersData)
    }, [])

    function handleSearch(e) {
        setSearchValue(e.target.value)
    }

    const filterPlayers = players.filter((player) => {
        return searchValue.length === 0 || player.name.includes(searchValue)
    })

    return (
        <>
            <h1 className='page-title'>Our Team</h1>
            Search players: 
            <SearchBar onSearch={handleSearch} />
            <Player player={TITLE} />
            {
                filterPlayers.map((player) => {
                    return <Player key={player.number} player={player} />
                })
            }   
        </>
    )
}

export default Players
