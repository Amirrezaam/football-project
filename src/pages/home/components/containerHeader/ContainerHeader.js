import React, { useState } from 'react'
import CalendarBox from '../../../../components/calendar/CalendarBox';
import SelectBox from '../../../../components/selectBox/SelectBox';

export default function ContainerHeader({ country, standing, date, setDate, showFixtures, lg }) {

    const [openCalendar, setOpenCalendar] = useState(false);

    return (
        <>
            {
                lg ?
                    <div className="mb-8 lg:flex hidden items-center justify-between">
                        <img src={standing[0]?.league?.logo} className="w-[80px]" />
                        {
                            showFixtures &&
                            <CalendarBox
                                openCalendar={openCalendar}
                                setOpenCalendar={setOpenCalendar}
                                date={date}
                                setDate={setDate}
                            />
                        }
                        <h2 className="text-center text-2xl font-bold text-white flex items-center">
                            <img className="mr-2 w-[70px]" src={country.flag} /> {country.name}
                        </h2>
                        {
                            !showFixtures &&
                            <SelectBox />
                        }
                    </div>
                    :
                    <div className="lg:hidden block">
                        <h2 className="text-center flex justify-center text-2xl font-bold text-white items-center">
                            <img className="mr-2 w-[70px]" src={country.flag} /> {country.name}
                        </h2>
                        <div className="my-5 flex items-end justify-between">
                            <img src={standing && standing[0]?.league?.logo} className="mr-2 w-[50px]" />
                            {
                                showFixtures ?
                                    <CalendarBox
                                        openCalendar={openCalendar}
                                        setOpenCalendar={setOpenCalendar}
                                        date={date}
                                        setDate={setDate}
                                    />
                                    :
                                    <SelectBox />
                            }
                        </div>
                    </div>
            }
        </>
    )
}
