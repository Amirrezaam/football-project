import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFixtures, getPlayers } from '../../service/api';
import Pagination from './components/pagination/Pagination';
import PlayersList from './components/playersList/PlayersList';
import TeamInfo from './components/teamInfo/TeamInfo';
import Loader from '../../components/loader/Loader'
import { CountryContext } from '../../context/CountryProvider'
import SelectBox from '../../components/selectBox/SelectBox'
import CalendarBox from '../../components/calendar/CalendarBox'
import FixtureCard from '../../components/fixtureCard/FixtureCard'
import ShowFixtureBtn from '../../components/showFixtureBtn/ShowFixtureBtn'

export default function Team() {

    const { league, teamId } = useParams();
    const { state: { season } } = useContext(CountryContext);

    const [players, setPlayers] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [showFixtures, setShowFixtures] = useState(false);

    const [openCalendar, setOpenCalendar] = useState(false);
    const [date, setDate] = useState(new Date());

    const [fixtures, setFixtures] = useState(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            setPlayers(null);
            const data = await getPlayers(teamId, season, currentPage);
            setPlayers(data.response);
            setTotalPages(data.paging.total);
        }
        fetchPlayers();

    }, [currentPage, season])

    useEffect(() => {
        const fetchFixtures = async () => {
            setFixtures(null)
            const trueDate = date.toLocaleDateString().split("/").reverse().join("-");
            setFixtures(await getFixtures(trueDate, null, date.getFullYear(), null, teamId))
        }

        fetchFixtures();
    }, [date])

    return (
        <>
            <div className="container-box">
                <ShowFixtureBtn showFixtures={showFixtures} setShowFixtures={setShowFixtures} />
                {
                    showFixtures
                        ?
                        <CalendarBox
                            date={date}
                            setDate={setDate}
                            openCalendar={openCalendar}
                            setOpenCalendar={setOpenCalendar}
                            center
                        />
                        :
                        <SelectBox />
                }
                <TeamInfo teamId={teamId} season={season} league={league} />
                {
                    showFixtures
                        ?
                        fixtures
                            ? fixtures.length ?
                                fixtures.map(fixture => <FixtureCard fixture={fixture} />)
                                :
                                <p className="text-gray-200 text-center text-2xl mt-4">No fixture in this day.</p>
                            : <Loader />
                        :
                        <div>
                            <h3 className="text-white text-center mt-5 text-3xl">Players</h3>
                            {
                                players ?
                                    players.map(player =>
                                        <PlayersList
                                            player={player}
                                            season={season}
                                            league={league}
                                        />)
                                    : <Loader className="mt-7" />
                            }
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                            />
                        </div>
                }
            </div>
        </>
    )
}
