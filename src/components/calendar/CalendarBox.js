import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function CalendarBox({ setOpenCalendar, openCalendar, setDate, date, center }) {
    return (
        <div
            className={`w-[400px] cursor-pointer text-white flex items-center justify-between relative border rounded-md border-solid border-[#eee] h-[40px] ${center && "mx-auto"}`}
            style={{ zIndex: 1 }}
        >
            <div
                className="flex items-center justify-between w-full h-full"
                onMouseEnter={e => setOpenCalendar(true)}
                onMouseLeave={e => setOpenCalendar(false)}
            >
                <span className="pl-3">{date.toLocaleDateString()}</span>
                <ArrowDropDownIcon className="pr-1" />

            </div>
            {
                openCalendar && <div onMouseEnter={e => setOpenCalendar(true)}
                    onMouseLeave={e => setOpenCalendar(false)} className="calendar absolute top-[100%] fadeIn">
                    <Calendar onChange={setDate} value={date} />
                </div>
            }
        </div>
    )
}
