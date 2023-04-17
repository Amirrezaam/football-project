import React from 'react'
import InfoCardItem from '../infoCardItem/InfoCardItem'

export default function InfoCard({
    src,
    name,
    coach,
    position,
    firstname,
    lastname,
    age,
    birthDate,
    birthPlace,
    nationality,
    height,
    weight }) {
    return (
        <div className="card border-r border-b border-solid border-gray-400 mx-auto rounded-xl mt-5 py-3">
            <div className="card-header flex flex-col justify-center items-center">
                <img src={src} className="lg:w-[150px] w-[110px] rounded-full mb-3" />
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                <span className="text-gray-400">{coach || position}</span>
            </div>
            <div className="card-body flex justify-around">
                <div className="flex flex-col">
                    <InfoCardItem label={"first name"} value={firstname} />
                    <InfoCardItem label={"lastname"} value={lastname} />
                    <InfoCardItem label={"age"} value={age} />
                    <InfoCardItem label={"birth date"} value={birthDate} />
                </div>
                <div className="flex flex-col">
                    <InfoCardItem label={"birth place"} value={birthPlace} />
                    <InfoCardItem label={"nationality"} value={nationality} />
                    <InfoCardItem label={"height"} value={height} />
                    <InfoCardItem label={"weight"} value={weight} />
                </div>
            </div>
        </div>
    )
}
