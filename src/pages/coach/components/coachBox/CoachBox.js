import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getLeague } from '../../../../service/api';

export default function CoachBox({ team }) {

    const [league, setLeague] = useState(null);

    useEffect(() => {
        const fetchLeague = async () => {
            setLeague(await getLeague(null, team.team.id));
        }

        fetchLeague();
    }, [])

    return (
        <>
            <div className="mt-5 bg-[#404040] rounded-tl-xl rounded-tr-xl border-b-2 border-solid border-[#e72641] p-4">
                <div className="flex flex-col justify-center items-center">
                    <img src={team.team.logo} className="object-cover lg:w-[150px] w-[100px]" />
                    <h3 className="mt-4 text-white text-2xl font-bold">
                        <Link style={{ pointerEvents: league ? "all" : "none" }} to={`/team/league=${league}&team=${team.team.id}`}>{team.team.name}</Link>
                    </h3>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-center mt-4">
                    <p className="mx-4 text-sm lg:mb-0 mb-3 text-gray-400">Start: <span className="lg:text-xl text-base text-white">{team.start}</span></p>
                    <p className="mx-4 text-sm text-gray-400">End: <span className="lg:text-xl text-base text-white">{team.end || "now"}</span></p>
                </div>
            </div>
        </>
    )
}
