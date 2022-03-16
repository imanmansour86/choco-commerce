![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/choco-commerce)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/choco-commerce)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/choco-commerce)

# LaRoche Chocolate

LaRoche Chocolate is an E-Commerce website that allows users to view different kinds of chocolates, read about chocolate details for each product and buy chocolates. Built with MySQL, Sequelize, Express, Node, bcrypt, JWT, and React

## Deployed Link

- [Deployed](https://peaceful-gorge-21480.herokuapp.com/)

## Table of Contents

- [LaRoche Chocolate](#laroche-chocolate)
  - [Deployed Link](#deployed-link)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Models](#models)
  - [Libraries](#libraries)
  - [Built With](#built-with)
  - [Author](#author)
  - [License](#license)

## Installation

- Go to the app's [repo](https://github.com/imanmansour86/choco-commerce) in github and clone the app
- Open the app in VS code, navigate to .env file, change the DB_USER and DB_PW based on current user configurations
- From terminal: navigate to app's directoty and run:

  ```md
  $ npm install
  ```

- From terminal: navigate to db folder in the app's directoty and run:

  ```md
  $ mysql -uroot - p
  ```

- Run the schema file:

  ```md
  source schema.sql
  ```

- From terminal: navigate to the app's directoty and run:

  ```md
  $ npm run seed
  ```

- To invoke the app from terminal, run:

  ```md
  $ npm run develop
  ```

## Usage

- Homepage

![Homepage](/client/public/assets/get%20all%20products.gif)

- Single Product

![Single](/client/public/assets/singleProduct.gif)

- Update Cart

![Update](/client/public/assets/update%20quantity.gif)

- Empty Cart

![Empty](/client/public/assets/emptycart.gif)

- Refresh Cart

![Refresh](/client/public/assets/refresh.gif)

- Delete cart

![Delete](/client/public/assets/delete%20from%20cart.gif)

- Pay Balanace

![Pay](/client/public/assets/pay%20balances.gif)

- Animation

![Refresh](/client/public/assets/animation.gif)

- Signup

![Signup](/client/public/assets/signup.gif)

- Logout

![Logout](/client/public/assets/logout.gif)

## Features

The app has several components: Home, NavTabs, SingleProduct, RouteChangeTracker, Cart, CheckoutForm, Login and Signup. The app uses reducers and store context to store cartItems, which are made accessible for the rest of the components who need access to it. The reducer is first initialized with empty array to hold cartItems. The reducer has several dispatch actions: ADD_TO_CART, UPDATE_CART_QUANTITY,REMOVE_FROM_CART,CLEAR_CART and INITIALIZE.

```
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    cartItems: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};
```

## Models

The app has User,Product,Order and Order_Details modals. There is a one to many relationship between User and Order, established by user_id foreign key. There is also a many to many relationship between Product and Order modals, established through a third assosicarion table, Order_Details. It holds the product_id, order_id and quantity.

## Libraries

-Stripe

Payment service provider that allows checkout of products by processing credit card payment gateway. Front-end and Back-end need to be setup with appropirate published and secret keys. It’s a two factor authentication to ensure the payment information are not compromised. This app also uses StripeCheckout which renders the checkout along with required props as token and secret key

![Form](/client/public/assets/form.png)

-React reveal

Animation framework for React. It has basic animations such as fade, flip, zoom, rotate and a lot of more advanced animations. It allows to control all animations with props, Also it has server side rendering and high order components. Animation is established by importing the required animation and then wrapping the part to be animated by the animation tag

![Reveal](/client/public/assets/reveal.png)

-Google Analytics

A web analytics service offered by Google that tracks and reports website traffic. Helps gain insight into the region the app users live in, track how much time they are spending on average, track which page is most visited, track page interaction: scrolling, clicking, user engagement
and track revenue. After creating an account on the webiste, we need to created a property and data stream against our public URL. User interactions will be displayed on the dashboard

![Google](/client/public/assets/google.png)

- Models

![Model](/client/public/assets/modal.png)

- Relationship

![Model](/client/public/assets/relationship.png)

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Expressjs](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [React](https://reactjs.org/)
- [Google Analytics](https://analytics.google.com/analytics/web/?_ga=2.149095414.1901556607.1647384686-1594085352.1647384686&_gac=1.81879652.1647405661.CjwKCAjw8sCRBhA6EiwA6_IF4WRaCIUfuLGza4ruSat8labJyk1d1_Bv8kGHKQf-gEAcoqxrebZ7wxoClWoQAvD_BwE#/p306851511/reports/intelligenthome)
- [Stripe](https://stripe.com/)
- [JWT](https://jwt.io/)

## Author

Iman Mansour

- [Portfolio](https://imanmansour86.github.io/react-portfolio/)
- [Github](https://github.com/imanmansour86)
- [LinkedIn](https://www.linkedin.com/in/iman-mansour-51391515/)
- [Email](mailto:imanmansour86@gmail.com)

## License

This project is licensed under the MIT License
