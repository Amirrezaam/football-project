import React from 'react'
import { Link } from 'react-router-dom'

export default function PlayersList({ player, season, league }) {
    return (
        <div className="flex lg:flex-row flex-col items-center justify-between w-full rounded-t-lg rounded-tr-lg bg-[#404040] border-b-[1px] border-solid border-white px-3 mt-3 relative lg:py-14 py-3">
            <div className="flex lg:flex-row flex-col items-center lg:absolute top-[50%] lg:translate-y-[-50%] left-2">
                <img className="object-cover lg:mr-3 lg:w-[70px] w-[100px] rounded-full" src={player.player.photo} />
                <Link className="lg:text-2xl text-xl text-white hover:text-[#e72641] transition-all" to={`/player/playerId=${player.player.id}`}>{player.player.name}</Link>
            </div>
            <span className="lg:absolute my-6 lg:my-0 top-[50%] lg:translate-y-[-50%] left-[50%] lg:translate-x-[-50%] text-white">
                {player.player.nationality}
            </span>
            <span className="lg:absolute top-[50%] lg:translate-y-[-50%] right-2 text-white">{player.player.birth.date}</span>
        </div>
    )
}
