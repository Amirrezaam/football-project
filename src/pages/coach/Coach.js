import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCoach } from '../../service/api';
import InfoCard from '../../components/infoCard/InfoCard';
import CoachBox from './components/coachBox/CoachBox';
import Loader from '../../components/loader/Loader';
import { CountryContext } from '../../context/CountryProvider';

export default function Coach() {

    const { id } = useParams();

    const { state: { season } } = useContext(CountryContext);

    const [coach, setCoach] = useState(null);

    useEffect(() => {
        const fetchCoach = async () => {
            setCoach(null);
            setCoach(await getCoach(null, id));
        }

        fetchCoach();

    }, [])

    return (
        <>
            <div className="container-box">
                {
                    coach ?
                        <>
                            <InfoCard
                                src={coach.photo}
                                name={coach.name}
                                age={coach.age}
                                birthDate={coach.birth.date}
                                birthPlace={coach.birth.place}
                                coach="Coach"
                                firstname={coach.firstname}
                                height={coach.height}
                                lastname={coach.lastname}
                                nationality={coach.nationality}
                                weight={coach.weight}
                            />
                            <h4 className="text-center mt-4 text-white text-2xl">Coaching experience</h4>
                            {
                                coach.career.map(team => <CoachBox team={team} season={season} />)
                            }
                        </>
                        : <Loader />
                }
            </div>
        </>
    )
}
