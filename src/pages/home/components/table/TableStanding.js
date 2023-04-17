import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import StandingRow from '../standingRow/StandingRow';


export default function TableStanding({ standing, leagueID }) {
    return (
        <TableContainer className="scr">
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell sx={{ color: "#fff" }}>Team</TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>MP</TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>W</TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>D</TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>L</TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>GF</TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>GA</TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>GD</TableCell>
                        <TableCell align="right" sx={{ color: "#fff" }}>PTS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        standing[0]?.league.standings[0].map(team => <StandingRow
                            team={team}
                            leagueID={leagueID}
                        />)
                    }

                </TableBody>
            </Table>
        </TableContainer>
    )
}
