---

# **Plans Management API**

A RESTful API for managing plans, including functionality to create, update, delete, and fetch filtered plans based on criteria such as location, category, and timeline.

---

## **Features**

- **Create Plans**: Add a new plan with details like category, location, date, etc.
- **Update Plans**: Modify an existing plan's details.
- **Delete Plans**: Remove a plan using its ID.
- **Fetch Plans**: Retrieve filtered plans based on category, timeline, and distance.
- **Dynamic Filters**: Query plans by timeline (active, before, after), categories, and proximity to a location.

---

## **Technologies Used**

- **Node.js**: Backend framework.
- **Express.js**: Web application framework for building APIs.
- **MySQL**: Relational database for data storage.
- **MySQL2**: Database driver with promise support.
- **Postman**: Development and testing API.

---

## **Setup Instructions**

### **Prerequisites**

1. **Node.js**: Install [Node.js](https://nodejs.org/) (v14 or higher).
2. **MySQL**: Install and configure MySQL Server.
3. **Git**: Ensure Git is installed to clone the repository.

---

### **Database Configuration**

1. **Create Database**:
   ```sql
   CREATE DATABASE plans_db;
   ```

2. **Use the Database**:
   ```sql
   USE plans_db;
   ```



3. **Create the `plans` Table**:
   ```sql
   CREATE TABLE `plans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Category` varchar(45) DEFAULT NULL,
  `Created_by` varchar(120) DEFAULT NULL,
  `Latitude` decimal(10,6) DEFAULT NULL,
  `Longitude` decimal(10,6) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Time_created` datetime DEFAULT NULL,
  `People` int DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `People_joined` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
   ```


---

### **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/plans-management-api.git
   cd plans-management-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```


3. **Run the Server**:
   ```bash
   npm run dev
   ```
   The server will start at `http://localhost:8080`.

---

### **Postman collections are given above**
