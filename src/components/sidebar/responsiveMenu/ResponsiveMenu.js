import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function ResponsiveMenu({ open, setOpen }) {

    useEffect(() => {
        open ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
    }, [open])

    return (
        <div className="lg:hidden">
            {
                open ?
                    <button onClick={() => setOpen(false)}>
                        <CloseIcon sx={{ fontSize: "32px", color: "#fff" }} />
                    </button>
                    :
                    <button onClick={() => setOpen(true)}>
                        <MenuIcon sx={{ fontSize: "32px", color: "#fff" }} />
                    </button>
            }
        </div>
    )
}
