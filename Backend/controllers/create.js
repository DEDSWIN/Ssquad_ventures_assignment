import db from "../database_config/config.js"

export function createPlan(planDetails) {
    const {
        Category,
        Created_by,
        Latitude,
        Longitude,
        Date,
        Time_created,
        People,
        Status,
        People_joined
    } = planDetails;

    const query = `INSERT INTO plans (Category, Created_by, Latitude, Longitude, Date, Time_created, People, Status, People_joined) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    try {
        const result = db.query(query, [
            Category,
            Created_by,
            Latitude,
            Longitude,
            Date,
            Time_created,
            People,
            Status,
            People_joined,
        ]);
        return result; // Return the result (e.g., inserted ID)
    } catch (err) {
        console.error('Error inserting plan:', err);
        throw err;
    }
}