const sqlTerms = {
    select: {
        title: "SELECT",
        description: "The <span style='color: #007bff;'>SELECT</span> command is used to view the data stored in a table. It's like asking the database to show you certain information.",
        example: `
<span style='color: #007bff;'>SELECT</span> * <span style='color: #007bff;'>FROM</span> Products;
-- Shows all products that are in the 'Products' table.

<span style='color: #007bff;'>SELECT</span> name, price <span style='color: #007bff;'>FROM</span> Products;
-- Shows only the 'name' and 'price' of the products in the 'Products' table.
        `
    },
    from: {
        title: "FROM",
        description: "The <span style='color: #007bff;'>FROM</span> command tells you which table to pull the information from. It's like telling the database, 'I want the data from this table.'",
        example: `
<span style='color: #007bff;'>SELECT</span> name <span style='color: #007bff;'>FROM</span> Customers;
-- Shows only the 'name' of all the customers in the 'Customers' table.

<span style='color: #007bff;'>SELECT</span> Orders.date <span style='color: #007bff;'>FROM</span> Orders;
-- Shows only the date of the orders in the 'Orders' table.
        `
    },
    insert: {
        title: "INSERT",
        description: "The <span style='color: #007bff;'>INSERT</span> command is used to add new data to a table. It's like putting new information into a book.",
        example: `
<span style='color: #007bff;'>INSERT</span> <span style='color: #007bff;'>INTO</span> Products (name, price, category)
VALUES ('Laptop', 1200, 'Electronics');
-- Adds a new product to the 'Products' table.

<span style='color: #007bff;'>INSERT</span> <span style='color: #007bff;'>INTO</span> Customers (name, email)
VALUES ('Juan Pérez', 'juan.perez@gmail.com');
-- Adds a new customer with name and email to the 'Customers' table.
        `
    },
    delete: {
        title: "DELETE",
        description: "The <span style='color: #007bff;'>DELETE</span> command removes data from a table. It's like deleting something you no longer need.",
        example: `
<span style='color: #007bff;'>DELETE</span> <span style='color: #007bff;'>FROM</span> Products <span style='color: #007bff;'>WHERE</span> price < 50;
-- Deletes the products whose price is less than 50.

<span style='color: #007bff;'>DELETE</span> <span style='color: #007bff;'>FROM</span> Customers <span style='color: #007bff;'>WHERE</span> email = 'example@gmail.com';
-- Deletes the customer with that specific email.
        `
    },
    update: {
        title: "UPDATE",
        description: "The <span style='color: #007bff;'>UPDATE</span> command changes existing data. It's like editing something that's already saved.",
        example: `
<span style='color: #007bff;'>UPDATE</span> Products
<span style='color: #007bff;'>SET</span> price = 1500
<span style='color: #007bff;'>WHERE</span> name = 'Laptop';
-- Changes the price of the 'Laptop' to 1500.

<span style='color: #007bff;'>UPDATE</span> Customers
<span style='color: #007bff;'>SET</span> email = 'newemail@gmail.com'
<span style='color: #007bff;'>WHERE</span> name = 'Juan Pérez';
-- Changes the email of 'Juan Pérez' to a new one.
        `
    },
    create: {
        title: "CREATE",
        description: "The <span style='color: #007bff;'>CREATE</span> command is used to create something new, like a table or a database. It's like building a new space.",
        example: `
<span style='color: #007bff;'>CREATE</span> TABLE Products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    category VARCHAR(50)
);
-- Creates a new table called 'Products' with columns for id, name, price, and category.

<span style='color: #007bff;'>CREATE</span> DATABASE OnlineStore;
-- Creates a new database called 'OnlineStore'.
        `
    },
    where: {
        title: "WHERE",
        description: "The <span style='color: #007bff;'>WHERE</span> command filters data. It only shows data that meets a condition.",
        example: `
<span style='color: #007bff;'>SELECT</span> * <span style='color: #007bff;'>FROM</span> Products <span style='color: #007bff;'>WHERE</span> price > 50;
-- Shows only the products whose price is greater than 50.

<span style='color: #007bff;'>SELECT</span> name <span style='color: #007bff;'>FROM</span> Customers <span style='color: #007bff;'>WHERE</span> email LIKE '%gmail.com';
-- Shows the customers whose email ends in 'gmail.com'.
        `
    },
    join: {
        title: "JOIN",
        description: "The <span style='color: #007bff;'>JOIN</span> command combines data from two or more tables. It's like combining related information from different places.",
        example: `
<span style='color: #007bff;'>SELECT</span> Customers.name, Orders.date
<span style='color: #007bff;'>FROM</span> Customers
<span style='color: #007bff;'>JOIN</span> Orders <span style='color: #007bff;'>ON</span> Customers.customer_id = Orders.customer_id;
-- Joins the 'Customers' and 'Orders' tables to see who bought what.
        `
    },
    groupby: {
        title: "GROUP BY",
        description: "The <span style='color: #007bff;'>GROUP BY</span> command groups data by a common characteristic. It's like organizing similar things together.",
        example: `
<span style='color: #007bff;'>SELECT</span> category, COUNT(*) AS total
<span style='color: #007bff;'>FROM</span> Products
<span style='color: #007bff;'>GROUP BY</span> category;
-- Shows how many products are in each category.
        `
    },
    orderby: {
        title: "ORDER BY",
        description: "The <span style='color: #007bff;'>ORDER BY</span> command orders the data. You can order from lowest to highest or vice versa.",
        example: `
<span style='color: #007bff;'>SELECT</span> name, price 
<span style='color: #007bff;'>FROM</span> Products 
<span style='color: #007bff;'>ORDER BY</span> price DESC;
-- Orders the products by price from highest to lowest.
        `
    }
};

// Function to open the modal with dynamic content
function openModal(term) {
    const modalTitle = document.getElementById("sqlModalLabel");
    const modalDescription = document.getElementById("sqlDescription");
    const modalExample = document.getElementById("sqlExample");
    const modalImage = document.getElementById("sqlImage");

    const { title, description, example } = sqlTerms[term];
    modalTitle.textContent = title;
    modalDescription.innerHTML = description; // Changed to innerHTML to allow HTML with colors
    modalExample.innerHTML = example; // Changed to innerHTML to allow HTML with colors
    modalImage.style.display = "none"; // If no image, don't show it

    const modal = new bootstrap.Modal(document.getElementById("sqlModal"));
    modal.show();
}
