-- Create the YourHome Database
CREATE DATABASE YourHome;

-- Switch to the YourHome Database
USE YourHome;

-- Create the Users Table
CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    role VARCHAR(50),
    user_image_url VARCHAR(255),
    contact_number VARCHAR(20)   
);
-- Create the Sellers Table
CREATE TABLE Sellers (
    seller_id INT PRIMARY KEY,
    user_id INT,
    company_name VARCHAR(255),
    contact_number VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create the Buyers Table
CREATE TABLE Buyers (
    buyer_id INT PRIMARY KEY,
    user_id INT,
    full_name VARCHAR(255),
    contact_number VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create the Products Table with Image URL
CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    seller_id INT,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    status VARCHAR(50),
    product_type VARCHAR(255),
    image_url VARCHAR(255),
    FOREIGN KEY (seller_id) REFERENCES Sellers(seller_id)
);

-- Create the Bids Table
CREATE TABLE Bids (
    bid_id INT PRIMARY KEY,
    buyer_id INT,
    product_id INT,
    amount DECIMAL(10, 2),
    status VARCHAR(50),
    timestamp TIMESTAMP,
    FOREIGN KEY (buyer_id) REFERENCES Buyers(buyer_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-- Create the Contracts Table
CREATE TABLE Contracts (
    contract_id INT PRIMARY KEY,
    seller_id INT,
    buyer_id INT,
    product_id INT,
    contract_details TEXT,
    status VARCHAR(50),
    timestamp TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES Sellers(seller_id),
    FOREIGN KEY (buyer_id) REFERENCES Buyers(buyer_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

