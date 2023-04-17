import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Pagination({ currentPage, setCurrentPage, totalPages }) {

    const pagination = (page) => {
        let pages = [];
        for (let i = 0; i < page; i++) {
            pages.push(<div
                className={`lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] mx-2 rounded-full flex items-center justify-center cursor-pointer
                ${i + 1 === currentPage ? "bg-[#e72641] text-black" : "bg-[#202020] text-white"}
                `}
                onClick={() => setCurrentPage(i + 1)}
            >
                {i + 1}
            </div>
            )
        }
        return pages;
    }

    const nextPage = () => {
        currentPage < totalPages && setCurrentPage(prev => prev + 1)
    }

    const prevPage = () => {
        currentPage != 1 && setCurrentPage(prev => prev - 1)
    }

    return (
        <div className="w-full flex items-center justify-center mt-6">
            <button onClick={prevPage} className={`${currentPage === 1 && "cursor-default opacity-60"}`}>
                <ArrowBackIosNewIcon />
            </button>
            {
                pagination(totalPages).map(item => item)
            }
            <button onClick={nextPage} className={`${currentPage === totalPages && "cursor-default opacity-60"}`}>
                <ArrowForwardIosIcon />
            </button>
        </div>
    )
}
