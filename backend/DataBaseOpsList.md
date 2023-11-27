# Possible Database Operations that I'll be Using.

1. **Find all the products a buyer has placed bids on:**

    ```sql
    SELECT Products.*
    FROM Products
    JOIN Bids ON Products.product_id = Bids.product_id
    WHERE Bids.buyer_id = 2; -- Replace 2 with the actual buyer_id
    ```

2. **Find all the products that are currently available for bidding:**

    ```sql
    SELECT *
    FROM Products
    WHERE status = 'available';
    ```

3. **Find all the contracts a seller has:**

    ```sql
    SELECT Contracts.*
    FROM Contracts
    JOIN Sellers ON Contracts.seller_id = Sellers.seller_id
    WHERE Sellers.seller_id = 1; -- Replace 1 with the actual seller_id
    ```

4. **Find all the contracts a buyer has:**

    ```sql
    SELECT Contracts.*
    FROM Contracts
    JOIN Buyers ON Contracts.buyer_id = Buyers.buyer_id
    WHERE Buyers.buyer_id = 2; -- Replace 2 with the actual buyer_id
    ```

5. **Find all the products with bids that have a status of 'accepted':**

    ```sql
    SELECT Products.*
    FROM Products
    JOIN Bids ON Products.product_id = Bids.product_id
    WHERE Bids.status = 'accepted';
    ```

6. **Find all the products that are not sold (status is not 'sold'):**

    ```sql
    SELECT *
    FROM Products
    WHERE status != 'sold';
    ```

7. **Find all the products a seller owns:**

    ```sql
    SELECT Products.*
    FROM Products
    WHERE Products.seller_id = 1; -- Replace 1 with the actual seller_id
    ```

8. **Filter the products based on their product_type:**

    ```sql
    SELECT *
    FROM Products
    WHERE Products.product_type = 'villa'; -- Replace 'villa' with the actual product_type
    ```

9. **Find all the bids that a product has using its product_Id:**

    ```sql
    SELECT Bids.*
    FROM Bids
    WHERE Bids.product_id = 1; -- Replace 1 with the actual product_id
    ```

10. **Find the contract a product has:**

    ```sql
    SELECT Contracts.*
    FROM Contracts
    WHERE Contracts.product_id = 1; -- Replace 1 with the actual product_id
    ```

11. **Retrieve the top 3 most recently added products:**

    ```sql
    SELECT *
    FROM Products
    ORDER BY timestamp DESC
    LIMIT 3;
    ```

12. **Retrieve the top 3 most expensive products in the marketplace:**

    ```sql
    SELECT *
    FROM Products
    WHERE status = 'available'
    ORDER BY price DESC
    LIMIT 3;
    ```

13. **Retrieve all houses a buyer has bid on:**

    ```sql
    SELECT Products.*
    FROM Products
    JOIN Bids ON Products.product_id = Bids.product_id
    WHERE Bids.buyer_id = 2; -- Replace 2 with the actual buyer_id
    ```

14. **Retrieve all contracts a buyer has signed:**

    ```sql
    SELECT Contracts.*
    FROM Contracts
    WHERE Contracts.buyer_id = 2; -- Replace 2 with the actual buyer_id
    ```

15. **Retrieve all houses a seller has sold:**

    ```sql
    SELECT Products.*
    FROM Products
    JOIN Contracts ON Products.product_id = Contracts.product_id
    WHERE Contracts.seller_id = 1; -- Replace 1 with the actual seller_id
    ```

16. **Retrieve the number of available houses based on product type:**

    ```sql
    SELECT product_type, COUNT(*) AS count
    FROM Products
    WHERE status = 'available'
    GROUP BY product_type;
    ```

17. **Retrieve all bids on a specific house:**

    ```sql
    SELECT Bids.*
    FROM Bids
    WHERE Bids.product_id = 1; -- Replace 1 with the actual product_id
    ```

18. **Retrieve all the details about a users based on there role **

    ```sql
    SELECT Users.*, Sellers.*
    FROM Users
    LEFT JOIN Sellers ON Users.user_id = Sellers.user_id
    WHERE Users.username = 'username' AND Users.password = 'password' AND Users.role = 'seller'; --Replace the 2 with the actual user info
    ```

    ```sql
    SELECT Users.*, Buyers.*
    FROM Users
    LEFT JOIN Buyers ON Users.user_id = Buyers.user_id
    WHERE Users.username = 'username' AND Users.password = 'password' AND Users.role = 'buyer'; -- Replace the 2 with the actual user info
    ```
