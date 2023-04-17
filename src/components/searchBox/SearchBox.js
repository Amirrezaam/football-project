import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getCountries } from '../../service/api';

export default function SearchBox({ setCountries, setIsLoading, setOpen }) {

    const [countryName, setCountryName] = useState(null);

    const setCountrisHandler = async () => {
        setCountries(null);
        setIsLoading(true);
        setOpen(true);
        setCountries(await getCountries(countryName));
    }

    return (
        <div className="relative w-full lg:px-2 mr-2 lg:mr-0">
            <input
                type="text"
                className="my-4 w-full rounded-md bg-[#404040] p-2 text-xs text-white outline-none"
                placeholder="Search the country's full name"
                value={countryName}
                onChange={e => setCountryName(e.target.value)}
            />
            <button onClick={setCountrisHandler}>
                <SearchIcon
                    className="absolute top-[50%] lg:right-2 right-1 cursor-pointer text-white -translate-y-2/4"
                />
            </button>
        </div>
    )
}
