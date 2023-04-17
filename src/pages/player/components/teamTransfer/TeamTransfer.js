import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getLeague } from '../../../../service/api';

export default function TeamTransfer({ src, teamId, teamName }) {

    const [league, setLeague] = useState(null);

    useEffect(() => {
        const fetchLeague = async () => {
            setLeague(await getLeague(null, teamId));
        }

        fetchLeague();
    }, [])

    return (
        <div className="flex flex-col items-center">
            <img src={src} className="lg:mb-4 mb-1 lg:w-[150px] w-[100px]" />
            <h3 className="lg:text-xl text-lg text-white font-bold">
                <Link
                    style={{ pointerEvents: league ? "all" : "none" }}
                    to={`/team/league=${league}&team=${teamId}`}
                >
                    {teamName}
                </Link>
            </h3>
        </div>
    )
}
