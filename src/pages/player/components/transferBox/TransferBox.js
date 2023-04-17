import React from 'react'
import TeamTransfer from '../teamTransfer/TeamTransfer'

export default function TransferBox({ transfer }) {
    return (
        <div className="mt-5 bg-[#404040] rounded-tl-xl rounded-tr-xl relative border-b-2 border-solid border-[#e72641] p-4">
            <h6 className="lg:text-3xl text-lg text-center text-white lg:mb-0 mb-3">{transfer.date}</h6>
            <div className="flex lg:flex-row flex-col items-center justify-between">
                <TeamTransfer
                    src={transfer.teams.out.logo}
                    teamId={transfer.teams.out.id}
                    teamName={transfer.teams.out.name}
                />
                <div className="flex flex-col lg:my-0 my-4 items-center lg:absolute top-[50%] left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]">
                    <span className="text-white">{transfer.type}</span>
                    <div className="flex items-center">
                        <div className="flash bg-[#e72641] w-[40px] h-[40px] opacity-40"></div>
                        <div className="flash bg-[#e72641] w-[40px] h-[43px] opacity-60"></div>
                        <div className="flash bg-[#e72641] w-[40px] h-[47px] opacity-80"></div>
                        <div className="flash bg-[#e72641] w-[40px] h-[50px]"></div>
                    </div>
                </div>
                <TeamTransfer
                    src={transfer.teams.in.logo}
                    teamId={transfer.teams.in.id}
                    teamName={transfer.teams.in.name}
                />
            </div>
        </div>
    )
}
