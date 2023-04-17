import React, { useContext, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import { CountryContext } from '../../../../context/CountryProvider';

const StandingRow = ({ team, leagueID }) => {

    const [open, setOpen] = useState(false)
    const {state: {season}} = useContext(CountryContext);

    return (
        <>
            <TableRow className={open && "bg-[#e72641]"}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon sx={{ color: "#fff" }} /> : <KeyboardArrowDownIcon sx={{ color: "#fff" }} />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <div className="flex items-center">
                        <span className="text-white">{team.rank} - </span>
                        <img src={team.team?.logo} className="md:ml-4 ml-1 mr-1" width="30px" />
                        <h4 className="font-bold">
                            <Link className="font-bold text-white" to={`/team/league=${leagueID}&team=${team.team.id}`}>
                                {team.team?.name}
                            </Link>
                        </h4>
                    </div>
                </TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>{team.all?.played}</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>{team.all?.win}</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>{team.all?.draw}</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>{team.all?.lose}</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>{team.all?.goals.for}</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>{team.all?.goals.against}</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>{team.goalsDiff}</TableCell>
                <TableCell align="right" sx={{ color: "#fff" }}>{team.points}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, borderBottom: open ? "1px solid #fff" : "none" }} colSpan={6}>
                    <Collapse in={open} timeout="auto" style={{ zIndex: "-1" }} sx={{ zIndex: "-1" }} unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" sx={{ color: "#fff" }} gutterBottom component="div">
                                Statistics details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell sx={{ color: "#fff" }}>MP</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>W</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>D</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>L</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>GF</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>GA</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>Home</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.home.played}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.home.win}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.home.draw}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.home.lose}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.home.goals.for}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.home.goals.against}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>Away</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.away.played}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.away.win}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.away.draw}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.away.lose}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.away.goals.for}</TableCell>
                                        <TableCell sx={{ color: "#fff" }}>{team.away.goals.against}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default StandingRow;