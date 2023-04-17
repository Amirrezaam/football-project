import React from 'react'
import { Link } from 'react-router-dom'

export default function FixtureTeam({ src, league, teamId, teamName }) {
    return (
        <div className="flex flex-col items-center">
            <img src={src} className="lg:w-[120px] w-[80px]" />
            <h2 className="text-white text-center lg:text-2xl mt-2">
                <Link to={`/team/league=${league}&team=${teamId}`}>{teamName}</Link>
            </h2>
        </div>
    )
}
