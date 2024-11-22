import db from "../database_config/config.js";

export async function updatePlan(planId, updatedPlanData) {
    try {
        const { Category, Created_by, Latitude, Longitude, Date, People, Status, People_joined } = updatedPlanData;

        const sqlQuery = `
            UPDATE plans 
            SET 
                Category = ?, 
                Created_by = ?, 
                Latitude = ?, 
                Longitude = ?, 
                Date = ?, 
                People = ?, 
                Status = ?, 
                People_joined = ?
            WHERE id = ?;
        `;

        const [result] = await db.query(sqlQuery, [Category, Created_by, Latitude, Longitude, Date, People, Status, People_joined, planId]);

        return result;
    } catch (error) {
        console.error('Error updating plan:', error);
        throw new Error('Failed to update plan');
    }
}
