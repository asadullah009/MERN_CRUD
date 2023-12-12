import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const DialogProduct = ({ open, handleClose }) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSave = () => {
        console.log('Product Name:', productName);
        console.log('Price:', price);
        console.log('Category:', category);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter the details of the new product:
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
                        label="Product Name"
                        value={productName}
                        onChange={handleProductNameChange}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Price"
                        value={price}
                        onChange={handlePriceChange}
                        margin="normal"
                        fullWidth

                    />
                    <TextField
                        label="Category"
                        value={category}
                        onChange={handleCategoryChange}
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

export default DialogProduct;
