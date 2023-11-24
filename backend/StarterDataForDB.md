# Starter Data After creating the Database

-   **Users Table:**

    -   1 seller user

        ```sql
        -- Insert Dummy Seller User
        INSERT INTO Users (user_id, username, password, email, role)
        VALUES (1, 'seller_user', 'hashed_password', 'seller@example.com', 'seller');

        -- Insert Dummy Seller
        INSERT INTO Sellers (seller_id, user_id, company_name, contact_number)
        VALUES (1, 1, 'ABC Realty', '+123456789');
        ```

    -   1 buyer user

        ```sql
        -- Insert Dummy Buyer User
        INSERT INTO Users (user_id, username, password, email, role)
        VALUES (2, 'buyer_user', 'hashed_password', 'buyer@example.com', 'buyer');

        -- Insert Dummy Buyer
        INSERT INTO Buyers (buyer_id, user_id, full_name, contact_number)
        VALUES (2, 2, 'John Doe', '+987654321');

        ```

-   **Products Table:**

    -   2 products associated with the seller

        ```sql
        -- Insert Dummy Products for the Seller
        INSERT INTO Products (product_id, seller_id, name, description, price, status, product_type, image_url)
        VALUES
            (1, 1, 'Spacious Villa', 'A beautiful and spacious villa with a large garden.', 500000.00, 'available', 'villa', 'https://example.com/villa.jpg'),
            (2, 1, 'Modern Apartment', 'A stylish and modern apartment in the city center.', 250000.00, 'available', 'apartment', 'https://example.com/apartment.jpg');

        ```

-   **Bids Table:**

    -   2 bids associated with the buyer and respective products

        ```sql
        -- Insert Dummy Bids for the Products
        INSERT INTO Bids (bid_id, buyer_id, product_id, amount, status, timestamp)
        VALUES
            (1, 2, 1, 480000.00, 'pending', CURRENT_TIMESTAMP),
            (2, 2, 2, 220000.00, 'pending', CURRENT_TIMESTAMP);
        ```

-   **Contracts Table:**

    -   2 contracts associated with the seller, buyer, and respective products

        ```sql
        -- Insert Dummy Contracts for the Bids
        INSERT INTO Contracts (contract_id, seller_id, buyer_id, product_id, contract_details, status, timestamp)
        VALUES
            (1, 1, 2, 1, 'Contract details for the Spacious Villa', 'pending', CURRENT_TIMESTAMP),
            (2, 1, 2, 2, 'Contract details for the Modern Apartment', 'pending', CURRENT_TIMESTAMP);
        ```
