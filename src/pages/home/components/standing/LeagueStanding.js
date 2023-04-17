import React, { useState, useContext, useEffect } from 'react'
import { CountryContext } from '../../../../context/CountryProvider';
import { getFixtures, getLeague, getStanding } from '../../../../service/api';
import 'react-calendar/dist/Calendar.css';
import FixtureCard from '../../../../components/fixtureCard/FixtureCard';
import Loader from '../../../../components/loader/Loader';
import ContainerHeader from '../containerHeader/ContainerHeader';
import TableStanding from '../table/TableStanding';
import ShowFixtureBtn from '../../../../components/showFixtureBtn/ShowFixtureBtn';

const LeagueStanding = () => {

    const { state: { country, season } } = useContext(CountryContext);
    const [standing, setStanding] = useState(null);
    const [leagueID, setLeagueID] = useState(null);

    const [showFixtures, setShowFixtures] = useState(false);
    const [date, setDate] = useState(new Date())

    const [fixtures, setFixtures] = useState(null);

    useEffect(() => {
        const fetchLeague = async () => {
            if (country) {
                setStanding(null);

                const leagueId = (await getLeague(country?.name)).response[0]?.league.id;
                setLeagueID(leagueId);

                setStanding(await getStanding(leagueId, season))
            }
        }

        fetchLeague();
    }, [country, season])

    useEffect(() => {
        const fetchFixtures = async () => {
            if (leagueID) {
                setFixtures(null)
                const trueDate = date.toLocaleDateString().split("/").reverse().join("-");
                setFixtures(await getFixtures(trueDate, leagueID, date.getFullYear()))
            }
        }

        fetchFixtures();
    }, [date, leagueID])

    if (!country) {
        return (
            <div className="container-box">
                <p className="text-white">Please select a country ...</p>
            </div>
        )
    }

    return (
        <div className="container-box">
            {
                standing ?
                    <>
                        <ShowFixtureBtn showFixtures={showFixtures} setShowFixtures={setShowFixtures} />

                        <ContainerHeader
                            showFixtures={showFixtures}
                            standing={standing}
                            country={country}
                            date={date}
                            setDate={setDate}
                        />

                        <ContainerHeader
                            showFixtures={showFixtures}
                            standing={standing}
                            country={country}
                            date={date}
                            setDate={setDate}
                            lg
                        />

                        {
                            showFixtures ?
                                fixtures
                                    ? fixtures.length ?
                                        fixtures.map(fixture => <FixtureCard fixture={fixture} />)
                                        :
                                        <p className="text-gray-200 text-center text-2xl">No fixture in this day.</p>
                                    : <Loader />
                                :
                                <TableStanding standing={standing} leagueID={leagueID} />
                        }
                    </>
                    :
                    <Loader />
            }
        </div>
    )
}


export default LeagueStanding;