# API Documentation

### Account Related

#### 1. User Registration

-   **Endpoint URL:** `http://localhost/backend/api/routes/users/index.php`
-   **HTTP Method:** POST
-   **Request Format:**

    -   Content-Type: application/json
    -   Body:

                        ```json
                        {
                            "action": "Register",
                            "full_name": "Full Name",
                            "username": "Username",
                            "company_name": "Company Name",
                            "email": "email@gmail.com",
                            "password": "password",
                            "role": "user_role",
                            "contact_number": "Contact Number",
                            "user_image_url": "Uploaded File" // Note: File upload should be handled appropriately
                        }
                        ```

-   **Request Example:**

    ```json
    {
        "action": "Register",
        "full_name": "John Doe",
        "username": "john_doe",
        "company_name": "ABC Corp",
        "email": "john.doe@gmail.com",
        "password": "securepassword",
        "role": "user",
        "contact_number": "1234567890",
        "user_image_url": "profile_image.jpg"
    }
    ```

-   **Response Format:**

    ```json
    {
        "status": 1,
        "message": "User registered successfully."
    }
    ```

#### 2. User Login

-   **Endpoint URL:** `http://localhost/backend/api/routes/users/index.php`
-   **HTTP Method:** POST
-   **Request Format:**

    -   Content-Type: application/json
    -   Body:

                        ```json
                        {
                            "action": "Login",
                            "username": "Username",
                            "password": "password",
                            "role": "user_role"
                        }
                        ```

-   **Request Example:**

    ```json
    {
        "action": "Login",
        "username": "john_doe",
        "password": "securepassword",
        "role": "user"
    }
    ```

-   **Response Format:**

    ```json
    {
        "status": 1,
        "message": "Login successful.",
        "userData": {
            /* User Data Object */
        }
    }
    ```

-   **Response Example:**

    ```json
    {
        "status": 1,
        "message": "Login successful.",
        "userData": {
            "user_id": "123",
            "full_name": "John Doe",
            "username": "john_doe",
            "company_name": "ABC Corp",
            "email": "john.doe@gmail.com",
            "role": "user",
            "contact_number": "1234567890",
            "user_image_url": "profile_image.jpg"
        }
    }
    ```

### Product Related

#### 1. Create Product

-   **Endpoint URL:** `http://localhost/backend/api/routes/sellers/index.php`
-   **HTTP Method:** POST
-   **Request Format:**

    -   Content-Type: application/json
    -   Body:

                            ```json
                            {
                                "action": "create_product",
                                "name": "Product Name",
                                "house_type": "House Type",
                                "company": "Company Name",
                                "seller_id": "Seller ID",
                                "product_detail": "Detail about product",
                                "product_price": "Lowest Bid",
                                "user_image_url": "Uploaded File"
                            }
                            ```

-   **Request Example:**W

    ```json
    {
        "action": "create_product",
        "name": "Cozy Chair",
        "house_type": "Furniture",
        "company": "ABC Furniture",
        "seller_id": "1234",
        "product_detail": "A comfortable chair for your living room.",
        "product_price": "50.00",
        "user_image_url": "chair_image.jpg"
    }
    ```

-   **Response Format:**

    ```json
    {
        "status": 1,
        "message": "Product created successfully."
    }
    ```

-   **Response Example:**

    ```json
    {
        "status": 1,
        "message": "Product created successfully."
    }
    ```

## Products and Bid related

#### 1. Get All Products

-   **Endpoint URL:** `http://localhost/backend/api/routes/buyers/index.php`
-   **HTTP Method:** POST
-   **Request Format:**

    -   Content-Type: application/json
    -   Body:

                    ```json
                    {
                        "action": "get_all_products"
                    }
                    ```

-   **Request Example:**

    ```json
    {
        "action": "get_all_products"
    }
    ```

-   **Response Format:**

    ```json
    {
        "status": 1,
        "message": "Getting all products successful.",
        "productsData": [
            {
                "name": "Product Name",
                "product_type": "Product Type",
                "description": "Product Description",
                "price": "Product Price",
                "seller_id": "Seller ID",
                "product_id": "Product ID"
            }
            // ... Additional products
        ]
    }
    ```

-   **Response Example:**

    ```json
    {
        "status": 1,
        "message": "Getting all products successful.",
        "productsData": [
            {
                "name": "Laptop",
                "product_type": "Electronics",
                "description": "Powerful laptop for professional use",
                "price": "$1200.00",
                "seller_id": "123",
                "product_id": "456"
            }
            // ... Additional products
        ]
    }
    ```

#### 2. Get Seller's specific Products

-   **Endpoint URL:** `http://localhost/backend/api/routes/sellers/index.php`
-   **HTTP Method:** POST
-   **Request Format:**

    -   Content-Type: application/json
    -   Body:

                    ```json
                    {
                        "action": "get_products",
                        "seller_id": "Seller ID"
                    }
                    ```

-   **Request Example:**

    ```json
    {
        "action": "get_products",
        "seller_id": "123"
    }
    ```

-   **Response Format:**

    ```json
    {
        "status": 1,
        "message": "Getting seller products successful.",
        "productsData": [
            {
                "name": "Product Name",
                "product_type": "Product Type",
                "description": "Product Description",
                "price": "Product Price",
                "seller_id": "Seller ID",
                "product_id": "Product ID"
            }
            // ... Additional products
        ]
    }
    ```

-   **Response Example:**

    ```json
    {
        "status": 1,
        "message": "Getting seller products successful.",
        "productsData": [
            {
                "name": "Smartphone",
                "product_type": "Electronics",
                "description": "High-end smartphone with advanced features",
                "price": "$800.00",
                "seller_id": "123",
                "product_id": "789"
            }
            // ... Additional products
        ]
    }
    ```

### 3. Fetch Product Information for a Product Page

#### Endpoint

-   **Method:** `POST`
-   **URL:** `http://localhost/backend/api/routes/buyers/index.php/:productId`

#### Request Body

```json
{
    "action": "current_product",
    "product_id": "string"
}
```

#### Response

```json
{
    "status": 1, // 1 for success, 0 for failure
    "message": "Getting product successful.",
    "productsData": [
        {
            "name": "string",
            "product_type": "string",
            "description": "string",
            "price": "string",
            "seller_id": "string",
            "product_id": "string"
        }
    ]
}
```

### 4. Submit || Place a Bid on a product

#### Endpoint

-   **Method:** `POST`
-   **URL:** `http://localhost/backend/api/routes/buyers/index.php`

#### Request Body

```json
{
    "action": "bid_on_product",
    "product_id": "string",
    "bid": "string",
    "bid_detail": "string",
    "user_id": "string"
}
```

#### Response

```json
{
    "status": 1, // 1 for success, 0 for failure
    "message": "Bid placed successfully."
}
```

### 5. Get All Bids for a Seller

-   **Endpoint:** `/backend/api/routes/sellers/index.php`
-   **Method:** POST
-   **Request Payload:**
    ```json
    {
        "action": "get_all_bids",
        "seller_id": 123
    }
    ```
-   **Response:**
    ```json
    {
      "status": 1,
      "message": "Getting bids successful.",
      "productsData": [...]
    }
    ```

### 6. Submit Contract

-   **Endpoint:** `/backend/api/routes/sellers/index.php`
-   **Method:** POST
-   **Request Payload:**
    ```json
    {
        "action": "submit_contract",
        "seller_id": 123,
        "buyer_id": 456,
        "product_id": 789,
        "contract_details": "Contract details here"
    }
    ```
-   **Response:**
    ```json
    {
      "status": 1,
      "message": "Contract submitted successfully.",
      "contractData": {...}
    }
    ```
