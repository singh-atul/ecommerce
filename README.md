# Ecommerce Backend Server
This project contains the intial setup needed for creating the MVC folder for our `Ecommerce-backend` application and setting up of database.

## Table of contents
* [Technologies](#technologies)
* [Application Setup](#application-setup)
* [Application Structure](#application-structure)
* [Database Setup](#database-setup)

## Technologies
Project is created with:
* [Node.js](https://nodejs.org/) 
* SQL

## Application Setup
### 1. Install the Express Generator

```sh
> npm install -g express-generator
``` 
> If you get permission error while installing it,then run the above command as an administrator or root user.

### 2. Install the Express Application
Go to the directory where you want to create your project and install the express application by running the following command:
```sh
> npx express --view=ejs ecommerce-backend
``` 
> Now you should see a root directory with the name of `ecommerce-backend` in your current directory. And a logs of information indicating about the files and directories that are created:

```
create : ecommerce-backend/
   create : ecommerce-backend/public/
   create : ecommerce-backend/public/javascripts/
   create : ecommerce-backend/public/images/
   create : ecommerce-backend/public/stylesheets/
   create : ecommerce-backend/public/stylesheets/style.css
   create : ecommerce-backend/routes/
   create : ecommerce-backend/routes/index.js
   create : ecommerce-backend/routes/users.js
   create : ecommerce-backend/views/
   create : ecommerce-backend/views/error.ejs
   create : ecommerce-backend/views/index.ejs
   create : ecommerce-backend/app.js
   create : ecommerce-backend/package.json
   create : ecommerce-backend/bin/
   create : ecommerce-backend/bin/www
   change directory:
     $ cd ecommerce-backend
   install dependencies:
     $ npm install
   run the app:
     $ DEBUG=ecommerce-backend:* npm start
```
### 3. Install the Dependencies
Go inside the application and Install its depedencies by running the following command
```sh
> cd ecommerce-backend 
ecommerce-backend> npm install
``` 

### 4. Run the Express Application

You can start the server by running the following command:

```sh
ecommerce-backend> npm start
``` 
By default nodeJS uses port 3000, so you can to your browser and open 
```
http://localhost:3000/
```
To change the port number, go inside bin/www and update 3000 to required port number. 
> This application will run on port 4000.

## Application Structure

EJS tool have created the following folder structure by default 
```
.
├── app.js
├── bin
│   └── www
├── package.json
├── package-lock.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    └── index.ejs
```

Since we are working on backend server for ecommerce application this structure is updated as follow:

```
.
├── app.js
├── bin
│   └── www
├── config
├── models
├── node_modules
├── package.json
├── package-lock.json
├── routes
│   ├── api
│   │   ├── index.js
│   │   └── v1
│   │       └── index.js
│   └── index.js
├── src
│   ├── constants
│   ├── controller
│   ├── middlewares
│   ├── models
│   └── services
├── tests
└── views
    ├── error.ejs
    └── index.ejs


```


## Database Setup

### 1. MySQL Installation:

>LINUX

```sh
sudo apt update
sudo apt install mysql-server
```

> Windows

Follow [this](https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html) to download the mysql on windows.

> MAC

```sh
brew install mysql
```


### 2. MySQL Configuration:

In Linux the root user of mysql is set to perform the authentication using the `auth_socket` by default. You can check it by running the following command:
```sh
 sudo mysql
 mysql> SELECT user,authentication_string,plugin,host FROM mysql.user;
```


| user | authentication_string|auth_socket | localhost|
| :---: | :---: | :---: | :---: | 
| root             |                                           | auth_socket           | localhost |
| mysql.session    | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| mysql.sys        | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| debian-sys-maint | *70FC20C6FDEF784AA4BEACA2F4BFF67F5B228C32 | mysql_native_password | localhost |
4 rows in set (0.00 sec)

To allow our ecommerce application connect to this database we need to set the password for the root. 
```sh
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
Now we need to make run the following command to make the changes takes place
```sh
mysql> FLUSH PRIVILEGES;
```
 and thats it. To test if the authentication using the password is working or not we will getout of the mysql and retry logging in using the user as `root` and password as `password`
 
 ```sh
mysql> exit;
> mysql -u root -p
> password
 ```

Create a Database `ecommercedb` for this application using the following command:
```sh
CREATE DATABASE ecommercedb;
```

Since we will be using the database, run the following command
```sh
USE ecommercedb;
```

## Table Creation:

Use the following command to create the tables :

> Categories

```
CREATE TABLE `Categories` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `CreatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;;

```

## Data Insertion: 

Following are the dummy data that can be used to populate the tables

> Categories

```
INSERT INTO Categories (Name) VALUES ('Electronics');
INSERT INTO Categories (Name) VALUES ('Mobiles');
INSERT INTO Categories (Name) VALUES ('Books');
INSERT INTO Categories (Name) VALUES ('Applicances');
INSERT INTO Categories (Name) VALUES ('Fashion');

```
