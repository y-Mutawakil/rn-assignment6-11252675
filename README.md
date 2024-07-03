# rn-assignment6-11252675
Repository for a React Native app mimicking a provided UI mockup. Features include HomeScreen for product listing, CartScreen for managing selections, and functionalities for adding/removing items. Utilizes AsyncStorage/SecureStore/FileSystem for local data storage.




<p align="center">
    <img src="./AssignmentSix/assets/screenshot.gif" alt="Demo" width=300>
    <br>
    <h1 align="center"> Gif Demonstration</h1>
</p>



## Overview

This React Native project is created as part of the DCIT202 Mobile Application Development Assignment 6. The app provides a simple e-commerce interface where users can view a list of products, add them to a cart, and remove them from the cart. The app uses local storage to persist the cart items.



## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/St-Programming-Sai/rn-assignment6-11222100.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rn-assignment6-11222100
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project:
   ```bash
   npm start
   ```


## Features

- **Home Screen**: Displays a list of available products.
- **Cart Screen**: Displays the selected items.
- **Add to Cart**: Users can add products to their cart.
- **Remove from Cart**: Users can remove products from their cart.
- **Local Storage**: Uses AsyncStorage to store selected items locally on the device.





## Components

1. **App**
   - Sets up the navigation container and stack navigator.
   - Defines routes for Home and Cart screens.

2. **Home**
   - Renders the home screen containing the product list.
   - Utilizes the `Products` component to display the list.

3. **CartScreen**
   - Renders the cart screen displaying selected items.
   - Displays the estimated total price and checkout button using the `Footer` component.
   - Utilizes the `Items` component to display cart items with remove functionality.

4. **Products**
   - Renders the list of products with add-to-cart buttons.
   - Handles the addition of products to the cart and stores them using AsyncStorage.

5. **HomeScreen/Header**
   - Displays the header section of the home screen.
   - Contains navigation buttons and the app logo.

6. **CartScreen/Header**
   - Displays the header section of the cart screen.
   - Contains navigation buttons and the app logo.

7. **CartScreen/Footer**
   - Displays the estimated total and checkout button at the bottom of the cart screen.

8. **CartScreen/Items**
   - Renders the list of items in the cart.
   - Provides functionality to remove items from the cart.

## Design Choices

- **UI Design**: The UI is designed to be simple and user-friendly, following the provided UI mockup.
- **Navigation**: Implemented using React Navigation to allow seamless transition between the home and cart screens.
- **Local Storage**: Used AsyncStorage for persistent storage of cart items to maintain state across app sessions.

## Implementation Details

### Data Storage

- **AsyncStorage**: Used to store the selected items in the cart. Each product is saved with a unique key (`@product_<key>`).




## Screenshots



<p align="center">
  <img src="./AssignmentSix/assets/checkout-screenshot.jpg" width="250" hspace=30>
  <img src="./AssignmentSix/assets/empty-checkout-screenshot.jpg" width="250">
  <br>
  <img src="./AssignmentSix/assets/home-screen-screenshot.jpg" width="250" vspace=30>
</p>


