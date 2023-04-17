import React from 'react'

import logo from '../../assets/logo.png'


const Header = () => {

    return (
        <>
            <header className="w-[80%] lg:flex hidden h-[10vh] justify-between px-5 fixed ml-[20%] top-0 bg-[#1e1e1e] items-center shadow-xl">
                <div className="flex items-center">
                    <img src={logo} width="80px" />
                    <h1 className="text-white font-bold">Soccer Club</h1>
                </div>
            </header>
        </>
    )
}

export default Header;