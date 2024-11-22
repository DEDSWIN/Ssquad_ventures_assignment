import db from "../database_config/config.js";

export async function getFilteredPlans(query) {
    try {
        const {
            latitude,
            longitude,
            distance,
            categories,
            timeline,
            date,
        } = query;

        const latitudeNum = parseFloat(latitude);
        const longitudeNum = parseFloat(longitude);
        const distanceNum = parseFloat(distance);
        const categoriesList = categories ? categories.split(',') : [];

        // initially showing only those plans who we can register
        let sqlQuery = `SELECT * FROM plans WHERE Status = 'Open' AND People_joined < People`;

        const queryParams = [];

        // adding distance filter 
        if (latitude && longitude && distance) {
            sqlQuery += ` AND (6371 * ACOS(COS(RADIANS(?)) * COS(RADIANS(Latitude)) 
                        * COS(RADIANS(Longitude) - RADIANS(?)) 
                        + SIN(RADIANS(?)) * SIN(RADIANS(Latitude)))) <= ?`;
            queryParams.push(latitudeNum, longitudeNum, latitudeNum, distanceNum);
        }

        // Adddding cateogry filter
        if (categoriesList.length > 0) {
            const placeholders = categoriesList.map(() => '?').join(',');
            sqlQuery += ` AND Category IN (${placeholders})`;
            queryParams.push(...categoriesList);
        }



        if (timeline === 'active') {
            const currentDate = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
            sqlQuery += ` AND Date = ?`;
            queryParams.push(currentDate);
        } else if (timeline === 'after') {
            sqlQuery += ` AND Date > ?`;
            queryParams.push(date);
        } else if (timeline === 'before') {
            sqlQuery += ` AND Date < ?`;
            queryParams.push(date);
        }

        // Execute the query
        const [rows] = await db.query(sqlQuery, queryParams);
        return rows;
    } catch (error) {
        console.error("Error while fetching filtered plans:", error);
        throw new Error("Database query failed");
    }
}