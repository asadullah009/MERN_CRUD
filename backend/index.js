import express from 'express';
import { PORT, DataBaseURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import { Category } from './Models/category.js';


const app = express();

// ** Middleware allow all origin */
app.use(cors());
// ** Middleware allow custom origin  */
app.use(express.json());
app.post('/', async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send('Name is required'); // Change status to 400 for a bad request
        }

        const newCategory = {
            name: request.body.name
        }

        const category = await Category.create(newCategory);
        return response.status(201).json(category);
    } catch (error) {
        console.log("Error: ", error.message)
        return response.status(500).send(error.message);
    }
})


app.get('/', async (request, response) => {
    try {
        const category = await Category.find({});
        return response.status(200).json({
            count: category.length,
            data: category
        });

    } catch (error) {
        console.log("Error: ", error.message)
        response.status(500).send(error.message)

    }
})

app.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const category = await Category.findById(id);
        return response.status(200).json(category);
    } catch (error) {
        console.log("Error: ", error.message);
        return response.status(500).send(error.message);
    }
});


app.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const { name } = request.body;

        if (!name) {
            return response.status(400).send('Name is required');
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { name }, // Update the 'name' field with the provided value
            { new: true } // To get the updated document back after the update is applied
        );

        if (!updatedCategory) {
            return response.status(404).send('Category not found');
        }

        return response.status(200).json(updatedCategory);
    } catch (error) {
        console.log("Error: ", error.message);
        return response.status(500).send(error.message);
    }
});



app.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Category.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).send('Not found');
        }
        return response.status(200).send(result);
    }
    catch (error) {
        console.log("Error: ", error.message);
        return response.status(500).send(error.message);
    }
});






mongoose.connect(DataBaseURL)
    .then(() => {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((error) => {
        console.log('Error: ', error.message);
    });