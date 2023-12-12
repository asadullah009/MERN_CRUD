import React from 'react'
import { useState } from 'react';

// ** Import Mui Components **
import { Grid, Box, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';



// ** import dialogsBox **
import DialogCategory from '../../components/categoryComponent/DialogCategory';

// ** Mui Icon
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

// ** functions **
function createData(name, Price, category) {
    return { name, Price, category };
}

const rows = [
    createData('Frozen yoghurt'),
    createData('Ice cream sandwich'),
    createData('Eclair'),
    createData('Cupcake'),
    createData('Gingerbread'),
];


const CategoryPage = () => {
    // ** State
    const [open, setOpen] = useState(false);

    

    // ** Functions open and close Dialog Box **
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDelete = () => {
        console.log('delete');
    };

    const handleUpdate = () => {
        console.log('update');
    };

    return (
        <Grid container alignItems="center" direction="column">
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                height: '100%',
                margin: '0 auto',
                padding: '5px',

            }}>
                <h1>Category Page</h1>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Add New Category
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
                height: '100%',
                margin: '0 auto',
                padding: '5px',
            }}>
                <TableContainer >
                    <Table sx={{
                        width: '100%',
                    }} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Actions</TableCell> {/* Add Actions column */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Tooltip title="Update">
                                            <IconButton onClick={handleUpdate}>
                                                <BorderColorIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={handleDelete}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* Dialog Box */}
            {
                open && (<DialogCategory open={open} handleClose={handleClose} />)
            }
        </Grid>
    )
}

export default CategoryPage