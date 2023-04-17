import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getCoach, getTeamInfo } from '../../../../service/api';
import CloseIcon from '@mui/icons-material/Close';

import img from '../../../../assets/882.png'
import Loader from '../../../../components/loader/Loader';

export default function TeamInfo({ teamId, season, league }) {

    const [teamInfo, setTeamInfo] = useState(null);
    const [coach, setCoach] = useState(null);
    const [preview, setPreview] = useState({
        open: false,
        src: null,
    })

    useEffect(() => {
        const fetchTeamInfo = async () => {

            setTeamInfo(null);
            setTeamInfo(await getTeamInfo(teamId, season, league));

            setCoach(null);
            setCoach(await getCoach(teamId))
        }

        fetchTeamInfo();
    }, [])

    useEffect(() => {
        preview.open ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
    }, [preview.open])

    return (
        <div className="bg-[#404040] team-card lg:px-0 px-2 py-4 mt-4">
            {
                teamInfo ?
                    <div className="flex lg:flex-row flex-col justify-around items-center">
                        <div className="flex flex-col items-center">
                            <img src={teamInfo.team.logo} width="150px" />
                            <h3 className="my-3 font-bold text-2xl text-white">{teamInfo.team.name}</h3>
                            <span className="text-[#ccc]">{teamInfo.team.code}</span>
                        </div>
                        <div>
                            <p className="mt-2 text-[#ccc]">country : <span className="lg:text-xl text-white">{teamInfo.team.country}</span></p>
                            <p className="mt-2 text-[#ccc]">
                                stadium : <span className="cursor-pointer underline lg:text-2xl text-lg" onClick={() => setPreview(prev => {
                                    return {
                                        open: true,
                                        src: teamInfo.venue.image
                                    }
                                })}>{teamInfo.venue.name}</span>
                            </p>
                            <p className="mt-2 text-[#ccc]">
                                address : <span className="lg:text-xl text-white">{teamInfo.venue.address}</span>
                            </p>
                            <p className="mt-2 text-[#ccc]">
                                city : <span className="lg:text-xl text-white">{teamInfo.venue.city}</span>
                            </p>
                            <p className="mt-2 text-[#ccc]">
                                capacity : <span className="lg:text-xl text-white">{teamInfo.venue.capacity}</span>
                            </p>
                            <p className="mt-2 text-[#ccc]">
                                Coach : <Link
                                    className="lg:text-xl font-bold underline text-white"
                                    to={`/coach/${coach?.id}`}
                                >
                                    {coach?.name}
                                </Link>
                            </p>
                        </div>
                    </div>
                    : <Loader />
            }

            {
                preview.open &&
                <div
                    style={{ zIndex: 9999999999999999, top: window.scrollY }}
                    className="absolute left-0 bg-slate-500/50 w-full h-[100vh] flex items-center justify-center"
                >
                    <img src={preview.src} />
                    <button
                        className="absolute top-[10px] right-[15px] text-white"
                        onClick={() => setPreview(prev => {
                            return {
                                ...prev,
                                open: false
                            }
                        })}>
                        <CloseIcon sx={{ color: "#fff", fontSize: "36px" }} />
                    </button>
                </div>
            }
        </div>
    )
}
