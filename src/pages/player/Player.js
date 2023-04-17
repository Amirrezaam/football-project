import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlayers, getTransfer } from '../../service/api';
import TransferBox from './components/transferBox/TransferBox';
import InfoCard from '../../components/infoCard/InfoCard';
import Loader from '../../components/loader/Loader';
import { CountryContext } from '../../context/CountryProvider';

export default function Player() {

    const { playerId, league } = useParams();

    const { state: { season } } = useContext(CountryContext);

    const [player, setPlayer] = useState(null);
    const [transfer, setTransfer] = useState(null);

    useEffect(() => {
        const fetchPlayer = async () => {
            setPlayer(null);
            setPlayer((await getPlayers(null, season, null, playerId)).response[0]);

            setTransfer(null);
            setTransfer(await getTransfer(playerId));
        }

            fetchPlayer();

    }, [season])

    return (
        <>
            <div className="container-box">
                {
                    player ?
                        <InfoCard
                            src={player.player.photo}
                            name={player.player.name}
                            age={player.player.age}
                            birthDate={player.player.birth.date}
                            birthPlace={player.player.birth.place}
                            firstname={player.player.firstname}
                            height={player.player.height}
                            lastname={player.player.lastname}
                            nationality={player.player.nationality}
                            position={player.statistics[0].games.position}
                            weight={player.player.weight}
                        />
                        : <Loader />
                }

                <h3 className="mt-4 text-center text-4xl text-white">Transfers</h3>

                {
                    transfer ?
                        transfer.transfers.map(item => <TransferBox transfer={item} season={season} league={league} />)
                        : <Loader className="mt-5" />
                }

            </div>
        </>
    )
}
