import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFixtures } from '../../service/api';
import FixtureCard from '../../components/fixtureCard/FixtureCard';
import Loader from '../../components/loader/Loader';

export default function FixtureDetails() {

    const { id } = useParams();
    const [fixture, setFixture] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            setFixture((await getFixtures(null, null, null, id))[0]);
        }

        fetchDetails();

    }, [])

    return (
        <>
            <div className="container-box">
                {
                    fixture ?
                        <FixtureCard fixture={fixture} details />
                        :
                        <Loader />
                }
            </div>
        </>
    )
}
