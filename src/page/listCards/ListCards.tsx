import s from './listCards.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteCard} from "../../store/cardsSlice.ts";



export const ListCards=()=>{
   const cards =  useAppSelector(state=>state.cards.cards)
    const dispatch = useAppDispatch()
    const deleteCardHandler = (id:number)=>{
       dispatch(deleteCard(id))
    }
    return(
        <div className={s.container}>
            {cards.length===0
                ? <Typography variant="h6" gutterBottom>
                Dictionary is empty...
                </Typography>
                : <>
                    <Typography variant="h3" gutterBottom>
                        Your dictionary
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{fontSize: 18, fontWeight:600}} className = {s.thCell} >Term</TableCell>
                                    <TableCell sx={{fontSize: 18, fontWeight:600}}  className = {s.thCell}>Determination</TableCell>
                                    <TableCell className = {s.thCell}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cards.map((card) => (
                                    <TableRow
                                        key={card.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell sx={{fontSize: 16}} className = {s.cell}>{card.term}</TableCell>
                                        <TableCell sx={{fontSize: 16}} className = {s.cell}>{card.determination}</TableCell>
                                        <TableCell>
                                            <DeleteIcon className={s.iconDelete} onClick={()=>deleteCardHandler(card.id)}/>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>}

            <Link to={'/create'}>
                <Button variant="contained">Create cards</Button>
            </Link>

        </div>

    )
}