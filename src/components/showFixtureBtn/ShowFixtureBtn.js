import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ShowFixtureBtn({ showFixtures, setShowFixtures }) {
    return (
        <p
            onClick={() => setShowFixtures(prev => !prev)}
            className="text-right mb-3 text-white cursor-pointer"
        >
            {
                showFixtures ?
                    <span><ArrowBackIosNewIcon className="text-white" /> Back to standing</span>
                    :
                    <span>Go to fixtures <ArrowForwardIosIcon className="text-white" /></span>
            }
        </p>
    )
}
