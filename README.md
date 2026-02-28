OrderOnTheGo 🍔
👨‍💻 Author
Chutti prudhvi ratnam.
GitHub: https://github.com/ch-prudhvi.

Your On-Demand Food Ordering Solution
OrderOnTheGo is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to facilitate online food ordering and restaurant management. It features a robust role-based access system, a restaurant approval workflow, and a clean, modern user interface.

🚀 Key Features
👤 For Customers
User Authentication: Secure register and login functionality.
Browse & Search: Explore food items and restaurants with real-time search.
Categorization & Filters: Filter by Veg/Non-Veg preferences and categories.
Smart Cart: Single-restaurant enforcement to streamline orders.
Detailed Checkout: Collects precise delivery information (address, pincode, contact).
Order History: Track past orders and current status (Delivered, Cancelled, etc.).
🏪 For Restaurants
Restaurant Dashboard: Manage menu items and track orders.
Sales Analytics: Live tracking of total revenue and delivered item counts.
Menu Management: Add new items with images, descriptions, and dynamic pricing.
Approval System: New restaurant accounts require admin approval before going live.
🛡️ For Admins
Admin Dashboard: Overview of all users and restaurants.
Restaurant Management: Approve or disapprove restaurant accounts with a single click.
System Integrity: Centralized control over the platform's restaurant base.
🛠️ Technology Stack
Frontend
React (v19): Modern UI components and state management.
React Router (v7): Client-side routing.
Axios: API communication.
Bootstrap (v5): Responsive grid system and styling.
Vanilla CSS: Custom premium aesthetics and animations.
Backend
Node.js & Express: High-performance server architecture.
MongoDB & Mongoose: Flexible NoSQL database and schema modeling.
JWT (JSON Web Token): Secure authentication and role-based authorization.
Multer: Handling image uploads for food items.
Bcrypt.js: Industry-standard password hashing.

📂 Project Structure
SB-FOODS/
├── Frontend/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components (Home, Cart, Profile, etc.)
│   │   └── App.js   # Main application routing
|__ Admin/
|   |__src/
|   |  |__ components/  # Reusable UI components
|   |  |__ pages/       # Page components (Home, Cart, Profile, etc.)
|   |  |__ App.js   # Main application routing
|   |
├── Server/              # Express backend
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth and authorization guards
│   └── index.js         # Entry point
└── README.md            # You are here!
