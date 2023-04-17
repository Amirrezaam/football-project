import React, { useEffect, useState } from 'react'
import Loader from '../../../../components/loader/Loader'
import { getFixturesStatistics } from '../../../../service/api'

export default function FixtureStatistics({ fixtureId }) {

    const [home, setHome] = useState(null)
    const [away, setAway] = useState(null)

    useEffect(() => {
        const fetchData = () => {
            getFixturesStatistics(fixtureId).then(res => {
                setHome(res[0].statistics);
                setAway(res[1].statistics);
            })
        }

        fetchData();
    }, [])

    const generateStatistics = () => {
        let contents = [];
        for (let i = 0; i < home.length; i++) {
            const homeValue = parseInt(home[i].value) || 0;
            const awayValue = parseInt(away[i].value) || 0;
            const totalEvent = homeValue + awayValue;

            contents.push(
                <div className="mt-4">
                    <h2 className="text-white text-center">{home[i].type}</h2>
                    <div className="flex items-center justify-between relative">
                        <span className={`text-white mr-2 absolute left-2`}>{home[i].value || 0}</span>
                        <div className="bg-[#707070] h-[20px] w-full flex">
                            <div
                                className={`bg-[#e72641] h-full`}
                                style={{ width: homeValue / totalEvent * 100 + "%" }}>
                            </div>
                            <div
                                className={`h-full bg-[#202020]`}
                                style={{ width: awayValue / totalEvent * 100 + "%" }}>
                            </div>
                        </div>
                        <span className="text-white ml-2 absolute right-2">{away[i].value || 0}</span>
                    </div>
                </div>)
        }

        return contents;
    }

    return (
        <>
            {
                home && away ? generateStatistics().map(item => item) : <Loader />
            }
        </>
    )
}
