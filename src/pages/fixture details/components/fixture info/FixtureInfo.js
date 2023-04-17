import React from 'react'
import { Link } from 'react-router-dom'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ImportExportIcon from '@mui/icons-material/ImportExport';

export default function FixtureInfo({ event }) {

    const generateIcon = (type, detail) => {
        switch (type) {
            case "Goal":
                return <SportsSoccerIcon />
            case "Card":
                const cardColor = detail.split(" ");
                if (cardColor[0] === "Yellow") {
                    return <div className="w-[15px] h-[20px] rounded-sm border border-solid border-white rotate-12 bg-yellow-300"></div>;
                }
                return <div className="w-[15px] h-[20px] rounded-sm border border-solid border-white rotate-12 bg-red-600"></div>
            case "subst":
                return <ImportExportIcon />
            default:
                return;
        }
    }

    return (
        <div className="text-white flex w-full justify-between items-center my-2">
            <div className="flex items-center">
                <img src={event.team.logo} className="mr-1" width="20px" />
                {generateIcon(event.type, event.detail)}
            </div>
            {
                event.type !== "subst" ?
                    <div className="">
                        <Link to={`/player/playerId=${event.player.id}`} className="mx-2 md:text-lg">
                            {event.player.name} {event.detail === "Penalty" && <span>(P)</span>} {event.detail === "Own Goal" && <span>(OG)</span>}
                        </Link>
                        {
                            event.assist.id &&
                            <p className="text-gray-400 md:text-[.85rem] text-[.75rem]">
                                <Link to={`/player/playerId=${event.assist.id}`}>{event.assist.name}</Link>
                            </p>
                        }
                    </div>
                    :
                    <div className="">
                        <Link to={`/player/playerId=${event.assist.id}`} className="mx-2 text-lg">
                            {event.assist.name}
                        </Link>

                        <p className="text-gray-400 text-[.85rem]">
                            <Link to={`/player/playerId=${event.player.id}`}>{event.player.name}</Link>
                        </p>
                    </div>
            }

            <span>({event.time.elapsed})</span>
        </div>
    )
}
