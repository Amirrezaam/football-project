import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CountryContext } from '../../context/CountryProvider';
import { getCountries } from '../../service/api';
import Loader from '../loader/Loader';
import SearchBox from '../searchBox/SearchBox';
import ResponsiveMenu from './responsiveMenu/ResponsiveMenu';
import RefreshBtn from '../refreshBtn/RefreshBtn';

export default function SideBar() {

    const [countries, setCountries] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false)

    const [refresh, setRefresh] = useState(false)

    const { state: { country }, dispatch } = useContext(CountryContext);

    useEffect(() => {

        const fetchData = async () => {
            getCountries().then(res => {
                console.log(res);
                setCountries(res);
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
            })
        }

        if (!countries) {
            fetchData();
        }

    }, [refresh])


    return (
        <div className="bg-[#1e1e1e] fixed top-0 scr left-0 lg:w-[20%] w-full lg:min-h-full lg:pt-[1vh] shadow-xl lg:overflow-auto px-3 lg:px-0" style={{ zIndex: 9999 }}>
            <div className="flex items-center justify-between lg:block">
                <SearchBox setCountries={setCountries} setIsLoading={setIsLoading} setOpen={setOpen} />
                <ResponsiveMenu open={open} setOpen={setOpen} />
            </div>
            <div className={`w-[100%] max-h-[100vh] pb-3 lg:pb-8 lg:relative absolute bg-[#1e1e1e] lg:left-0  ${open ? "left-0" : "left-[-100%]"} transition-all overflow-scroll overflow-x-hidden scr`}>
                <h2 className="text-[#ccc] ml-3 lg:ml-7 mb-2">Countries</h2>
                <ul className="">
                    {
                        countries ?
                            countries.map((co, i) =>
                                <Link
                                    className={`lg:pl-12 pl-8 py-2 flex items-center text-white cursor-pointer hover:bg-[#e72641] transition-all ${country?.name === co.name && "bg-[#e72641]"} ${i === countries.length - 1 && "mb-8"}`}
                                    onClick={() => { dispatch({ type: "SELECT_COUNTRY", payload: co }); setOpen(false); }}
                                    to="/"
                                >
                                    <img src={co.flag} width="30px" className="mr-3" /> {co.name}
                                </Link>
                            )
                            :
                            isLoading ?
                                <Loader className="mt-10" />
                                :
                                <RefreshBtn setIsLoading={setIsLoading} setRefresh={setRefresh} />
                    }
                </ul>
            </div>
        </div>
    )
}
