import React from 'react'
import { Link } from 'react-router-dom'
import FixtureInfo from '../../pages/fixture details/components/fixture info/FixtureInfo';
import FixtureStatistics from '../../pages/fixture details/components/fixture statistics/FixtureStatistics';
import FixtureTeam from './fixtureTeam/FixtureTeam';

export default function FixtureCard({ fixture, details }) {

    return (
        <div className="p-4 bg-[#505050] rounded-lg mt-4">
            <h1 className="text-center text-white mb-1">{fixture?.fixture.venue.name}</h1>
            <p className="text-center text-gray-400">{fixture?.fixture.status.short}</p>
            <div className="flex items-center justify-between relative mt-2">
                <FixtureTeam
                    src={fixture?.teams.home.logo}
                    league={fixture?.league.id}
                    teamId={fixture?.teams.home.id}
                    teamName={fixture?.teams.home?.name}
                />

                {
                    fixture?.goals.home === null ?
                        <div className="text-3xl text-white absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">{new Date(fixture?.fixture.date).toLocaleString().split(", ")[1]}</div>
                        :
                        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                            <span className="text-white text-2xl">{fixture?.goals.home} - {fixture?.goals.away}</span>
                        </div>
                }
                <FixtureTeam
                    src={fixture?.teams.away.logo}
                    league={fixture?.league.id}
                    teamId={fixture?.teams.away.id}
                    teamName={fixture?.teams.away?.name}
                />
            </div>
            {
                !details &&
                <p className="text-white text-[12px] lg:text-sm text-center underline">
                    <Link to={`/fixture/${fixture.fixture.id}`}>Go to details !</Link>
                </p>
            }
            {
                details &&
                <>
                    <div className="lg:w-[70%] mx-auto mt-6">
                        <FixtureStatistics fixtureId={fixture.fixture.id} />
                    </div>

                    <div className="p-3 bg-[#404040] lg:w-[70%] flex flex-col items-center text-center rounded-lg border border-solid border-white mt-6 mx-auto relative">
                        {
                            fixture?.events.map(event =>
                                <FixtureInfo event={event} />
                            )
                        }
                    </div>
                </>
            }
        </div>
    )
}
