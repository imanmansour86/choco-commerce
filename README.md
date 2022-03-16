![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/choco-commerce)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/choco-commerce)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/choco-commerce)

# LaRoche Chocolate

LaRoche Chocolate is an E-Commerce website that allows users to view different kinds of chocolates, read about chocolate details for each product and buy chocolates. Built with MySQl, Sequelize, Express, Node, bcrypt, JWT, and React

## Deployed Link

- [Deployed](https://peaceful-gorge-21480.herokuapp.com/)

## Table of Contents

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

- Delete cart

![Delete](/client/public/assets/delete%20from%20cart.gif)

- Pay Balanace

![Pay](/client/public/assets/pay%20balances.gif)

- Update Cart

![Update](/client/public/assets/update%20quantity.gif)

- Empty Cart

![Empty](/client/public/assets/emptycart.gif)

- Empty Cart

![Refresh](/client/public/assets/refresh.gif)

- Animation

![Refresh](/client/public/assets/animation.gif)

- Signup

![Signup](/client/public/assets/signup.gif)

- Logout

![Logout](/client/public/assets/logout.gif)

## Features

When the user first opens the page, a list of activites appear on the page. When click on a single activity, the user is prompted to either sign up or login. After login, the user can see his created activities by creating the Activity tab in the nav bar. The user can also delete activities from his Activity page, or attend an activity on homepage. The homepage shows people signed up for each event, when the users clicks on the button to attend, his name is added to the people coming list

## Modals

Our app has many to many relationship between user and activity models, this is done through an assosicstion table that has user_id and activity_id. Users can attend many activities and activities belong to many users. There is a one to many relationship as well between user and activity, since the user can create many activities. Screenshot below shows our model's structure

![Model](/public/images/models.png)

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Expressjs](https://expressjs.com/)
- [Express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [Express-session](https://www.npmjs.com/package/express-session)
- [Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Resources Used

- [W3schools](https://www.w3schools.com)
- [stackoverflow](https://stackoverflow.com)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Author

Iman Mansour

- [Portfolio](https://imanmansour86.github.io/react-portfolio/)
- [Github](https://github.com/imanmansour86)
- [LinkedIn](https://www.linkedin.com/in/iman-mansour-51391515/)
- [Email](mailto:imanmansour86@gmail.com)

## License

This project is licensed under the MIT License
