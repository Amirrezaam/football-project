import React, { useContext } from 'react'
import { CountryContext } from '../../context/CountryProvider'

export default function SelectBox() {

    const { state: { season }, dispatch } = useContext(CountryContext);

    return (
        <div className="text-right">
            <select
                className="w-[150px] h-[40px] px-1 outline-none text-white bg-[#e72641] rounded-lg"
                value={season}
                onChange={e => dispatch({ type: "CHANGE_SEASON", payload: e.target.value })}
            >
                {
                    [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
                        .reverse().map(season =>
                            <option value={season}>{season}</option>
                        )
                }
            </select>
        </div>
    )
}
