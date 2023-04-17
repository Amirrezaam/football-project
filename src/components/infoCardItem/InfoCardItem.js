import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function InfoCardItem({label, value}) {
    return (
        <div className="relative mt-3">
            <ArrowForwardIosIcon sx={{ position: "absolute", top: "50%", left: "-25px", transform: "translateY(-50%)", color: "#e72641" }} />
            <span className="capitalize text-gray-400 text-sm">{label} :</span> <strong className="lg:text-xl text-white">{value || "__"}</strong>
        </div>
    )
}
