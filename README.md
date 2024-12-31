E-Commerce Application

Project Overview
This is a feature-rich e-commerce application that allows users to browse, search, filter, and manage products seamlessly. The app provides an intuitive interface to explore product details and manage the shopping cart efficiently.

Features Implemented

Home Page
Displays all products in a grid layout for easy browsing.
Search Functionality: Users can search for products by name directly from the navbar.
Filter by Category: Users can select a specific category to view relevant products.
Sorting Options:
Sort products by price (low to high).
Sort products by price (high to low).
Sort products by ratings (high to low).

Product Details Page
Users can view detailed information about a selected product, including:
High-quality product image.
Product title and description.
Price and ratings.

Similar Products Section:
Displays related products to help users discover similar items.

Cart Functionality
Add to Cart: Users can add products to the cart from the home or details page.

Quantity Management:
Users can directly increment or decrement the quantity of items in the cart.
Prevents decrementing the quantity below 1.
Remove Items: Users can remove individual items from the cart.
Real-Time Updates: Cart automatically updates the total price and quantity of items as changes are made.
View Total Amount: Displays the total cost of all items in the cart.

Setup Instructions
Follow these steps to set up and run the project locally:

Prerequisites
Ensure you have the following installed:

Node.js (v16+ recommended)
npm (or yarn)
Steps to Run the Project
Clone the Repository

bash
Copy code
git clone https://github.com/ashakansayyad/E-commerce-Product-List
cd your-repo-folder
Install Dependencies Install the required packages using npm or yarn:

bash
Copy code
npm install
# or
yarn install
Start the Development Server Run the following command to start the application:

bash
Copy code
npm start
# or
yarn start
Open in Browser The app should open automatically in your browser. If not, visit:

arduino
Copy code
http://localhost:5173

Technologies Used
Frontend Framework: React
State Management: React Context API
Styling: Modular CSS for a clean and responsive UI

Key Features in Detail

Navbar
A global search bar is available in the navbar for quick product lookup.
Users can filter products by name 

Home Page
Displays a list of products fetched from a mock API .
Each product card includes an image, title, price, and a button to view details and add to the cart.
View producst by category , sort products by price or ratings

Details Page
Provides detailed information about the selected product.
Displays similar products at the bottom of the page to help users discover more options.

Cart Page
A dedicated cart page where users can:
View all products in their cart.
Increment or decrement quantities.
Remove products from the cart.
See the total cost dynamically update.


Sayyad Ashakan 
