import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const DialogCategory = ({ open, handleClose }) => {
    const [CategoryName, setCategoryName] = useState('');
    

    const handleCategoryNameChange = (event) => {
        setCategoryName(event.target.value);
    };

    

    const handleSave = () => {
        console.log('Category Name:', CategoryName);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle>Add New Category</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter the details of the new Category:
                </DialogContentText>
                <Box
                    noValidate
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <TextField
                        label="Category Name"
                        value={CategoryName}
                        onChange={handleCategoryNameChange}
                        margin="normal"
                        fullWidth
                    />

                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave} variant="contained" color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogCategory;
