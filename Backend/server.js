import express from 'express'
import { createPlan } from './controllers/create.js';
import { getFilteredPlans } from './controllers/read.js';
import { updatePlan } from './controllers/update.js';
import { deletePlan } from './controllers/delete.js';


const app = express();
app.use(express.json());



// Creating Plan
app.post("/plans", async (req, res) => {
    const planDetails = req.body;
    try {
        const result = createPlan(planDetails);
        res.status(201).json({ message: 'Plan created successfully', result });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create plan' });
    }
});

// Getting Filtered Plans
app.get('/plans', async (req, res) => {
    try {
        const plans = await getFilteredPlans(req.query); // Passing the whole query object directly
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch plans' });
    }
});

// Updating Plans
app.put('/plans/:id', async (req, res) => {
    const planId = req.params.id;  // Extract the plan ID from the URL
    const updatedPlanData = req.body;

    try {
        const result = await updatePlan(planId, updatedPlanData);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Plan updated successfully', message_from_db: result });

        } else {
            res.status(404).json({ message: 'Plan not found or no changes made' });
        }
    } catch (error) {
        console.error('Error updating plan:', error);
        res.status(500).json({ message: 'Error updating plan' });
    }
});

// Deleting a Plan
app.delete('/plans/:id', async (req, res) => {
    const planId = req.params.id;

    try {
        const result = await deletePlan(planId);

        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Plan deleted successfully', message_from_db: result });
        } else {
            res.status(404).json({ message: 'Plan not found' });
        }
    } catch (error) {
        console.error('Error deleting plan:', error);
        res.status(500).json({ message: 'Error deleting plan' });
    }
});



app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('something broke')
})

app.listen(8080, () => {
    console.log('server is running on port 8080')
})