import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';

export default function RefreshBtn({setIsLoading, setRefresh}) {
    return (
        <div className="text-white text-center">
            <button
                onClick={() => { setIsLoading(true); setRefresh(prev => !prev) }}
                className="mt-2 border border-solid border-gray-700 rounded-full p-2"
            >
                <ReplayIcon />
            </button>
        </div>
    )
}
