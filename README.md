#### WEB II - PROJECT

## BUY YOUR HOME E-COMMERCE SITE 🐥🎒

| [School Project](https://www.haramaya.edu.et/)

### Landing Page preview

![](Design/hero.png)
![](Design/properties.png)
![](Design/contact.png)

### Possible Relational Database Design

#### Tables:

1. **Users:**

    - `user_id` (Primary Key)
    - `username`
    - `password` (hashed)
    - `email`
    - `role` (to distinguish between sellers and buyers)

2. **Sellers:**

    - `seller_id` (Primary Key, Foreign Key referencing Users)
    - `company_name` (if applicable)
    - `contact_number`
    - `other_seller_details`

3. **Buyers:**

    - `buyer_id` (Primary Key, Foreign Key referencing Users)
    - `full_name`
    - `contact_number`
    - `other_buyer_details`

4. **Products:**

    - `product_id` (Primary Key)
    - `seller_id` (Foreign Key referencing Sellers)
    - `name`
    - `description`
    - `price`
    - `status` (e.g., available, sold)
    - `product_type`

5. **Bids:**

    - `bid_id` (Primary Key)
    - `buyer_id` (Foreign Key referencing Buyers)
    - `product_id` (Foreign Key referencing Products)
    - `amount`
    - `status` (e.g., pending, accepted, rejected)
    - `timestamp`

6. **Contracts:**
    - `contract_id` (Primary Key)
    - `seller_id` (Foreign Key referencing Sellers)
    - `buyer_id` (Foreign Key referencing Buyers)
    - `product_id` (Foreign Key referencing Products)
    - `contract_details`
    - `status` (e.g., pending, completed)
    - `timestamp`

#### Relationships Between the Tables:

-   **Users to Sellers/Buyers:** One-to-One relationship using the `user_id` as a foreign key.
-   **Sellers to Products:** One-to-Many relationship using the `seller_id` as a foreign key.
-   **Products to Bids:** One-to-Many relationship using the `product_id` as a foreign key.
-   **Sellers to Contracts:** One-to-Many relationship using the `seller_id` as a foreign key.
-   **Buyers to Bids:** One-to-Many relationship using the `buyer_id` as a foreign key.

---

### Folder Structure

    /WEB II-PROJECT | BUY YOUR HOME E-COMMERCE PLATFORM
    |-- /Frontend
    |   |-- /public            # Static files served directly to the client
    |   |   |-- favicon.ico    # Favicon icon
    |   |   |-- ...
    |   |
    |   |-- /src               # Source code for the React front-end
    |   |   |-- /assets        # Static assets like images
    |   |   |   |-- /images    # Image files
    |   |           |-- placeholder.jpg
    |   |   |
    |   |   |-- /components    # Reusable React components
    |   |   |   |-- /common    # Common components (header, footer, etc.)
    |   |   |   |-- /buyer     # Components specific to buyer functionality
    |   |   |   |-- /seller    # Components specific to seller functionality
    |   |   |
    |   |   |-- /services      # Modules for handling API requests and authentication
    |   |   |   |-- api.js     # API request functions
    |   |   |   |-- auth.js    # User authentication functions
    |   |   |
    |   |   |-- /hooks         # Custom React hooks
    |   |   |
    |   |   |-- App.js         # Main React component
    |   |   |-- main.js        # Entry point for the React app
    |   |   |-- ...
    |   |
    |   |-- README.md          # Documentation for the front-end
    |   |-- package.json       # Frontend dependencies and scripts
    |   |-- .gitignore         # Specifies files and directories to ignore in version control
    |
    |-- /Backend
    |   |-- /api
    |   |   |-- index.php          # Entry point for the API
    |   |   |
    |   |   |-- /routes
    |   |       |-- /users
    |   |       |   |-- index.php  # Route handling user-related API requests
    |   |       |   |-- register.php  # Route handling user registration
    |   |       |   |-- login.php  # Route handling user login
    |   |       |
    |   |       |-- /sellers
    |   |       |   |-- index.php  # Route handling seller-related API requests
    |   |       |   |-- create.php  # Route handling seller registration
    |   |       |   |-- products.php  # Route handling seller products
    |   |       |   |-- bids.php  # Route handling seller bids
    |   |       |   |-- contracts.php  # Route handling seller contracts
    |   |       |
    |   |       |-- /buyers
    |   |           |-- index.php  # Route handling buyer-related API requests
    |   |           |-- create.php  # Route handling buyer registration
    |   |           |-- bids.php  # Route handling buyer bids
    |   |           |-- contracts.php  # Route handling buyer contracts
    |   |
    |   |-- /includes
    |       |-- db.php             # Database connection
    |       |-- functions.php      # Common functions
    |   |-- /uploads   # Directory for storing uploaded images
    |       |-- /images
    |           |-- /product_images
    |
    |-- README.md                  # Project-wide documentation
    |-- .gitignore                 # Specifies files and directories to ignore in version control
    |-- ...
