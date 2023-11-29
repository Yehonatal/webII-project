# PHP | Back-End 🎒

### Database Schema

-   [Sql Code](./DataBaseCode.sql)

---

    /WEB II-PROJECT | BUY YOUR HOME E-COMMERCE PLATFORM
        |-- /Backend
        |   |-- /api
        |   |   |-- index.php          # Entry point for the API
        |   |   |
        |   |   |-- /routes
        |   |       |-- [Done] /users
        |   |       |   |-- [Done] index.php  # Route handling user-related API requests
        |   |       |   |-- [Done] register.php  # Route handling user registration
        |   |       |   |-- [Done] login.php  # Route handling user login
        |   |       |
        |   |       |-- [Done] /sellers
        |   |       |   |-- [Done] index.php  # Route handling seller-related API requests
        |   |       |   |-- [Done] create.php  # Route handling seller registration
        |   |       |   |-- [Done] products.php  # Route handling seller products
        |   |       |   |-- bids.php  # Route handling seller bids
        |   |       |   |-- contracts.php  # Route handling seller contracts
        |   |       |
        |   |       |-- /buyers
        |   |           |-- index.php  # Route handling buyer-related API requests
        |   |           |-- [Done] create.php  # Route handling buyer registration
        |   |           |-- bids.php  # Route handling buyer bids
        |   |           |-- contracts.php  # Route handling buyer contracts
        |   |
        |   |-- [Done] /includes
        |       |-- [Done] db.php             # Database connection
        |       |-- functions.php      # Common functions
        |   |-- /uploads   # Directory for storing uploaded images
        |       |-- /images
        |           |-- /product_images
        |           |-- /user_images
        |
        |-- README.md                  # Project-wide documentation
        |-- .gitignore                 # Specifies files and directories to ignore in version control
        |-- ...
