import db from "../database_config/config.js"

export async function deletePlan(planId) {
    try {
        const sqlQuery = 'DELETE FROM plans WHERE id = ?';
        const [result] = await db.query(sqlQuery, [planId]);
        return result; // Return the result of the delete operation
    } catch (error) {
        console.error('Error deleting plan by ID:', error);
        throw new Error('Failed to delete plan');
    }
}
