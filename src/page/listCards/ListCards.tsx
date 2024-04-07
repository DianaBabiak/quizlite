import s from './listCards.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import {Card} from "../../types/types.ts";
import Typography from "@mui/material/Typography";
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";


export const ListCards=()=>{
    const [cards, setCards]=useState<Card[]>([{id:1, term:'hfjytdrt', determination:'hgftrdtfd'},{id:1, term:'hfjytdrt', determination:'hgftrdtfd'},{id:1, term:'hfjytdrt', determination:'hgftrdtfd'}])
    return(
        <div className={s.container}>
            <Typography variant="h3" gutterBottom>
                Your cards
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontSize: 18, fontWeight:600}} className = {s.thCell} >Term</TableCell>
                            <TableCell sx={{fontSize: 18, fontWeight:600}}  className = {s.thCell}>Determination</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cards.map((card) => (
                            <TableRow
                                key={card.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className = {s.cell}>{card.term}</TableCell>
                                <TableCell className = {s.cell}>{card.determination}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={20}
                rowsPerPage={10}
                page={0}
                onPageChange={()=>{}}
                onRowsPerPageChange={()=>{}}
            />
            <Link to={'/create'}>
                <Button variant="contained">Create cards</Button>
            </Link>

        </div>

    )
}