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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

```
> Products

```
CREATE TABLE `Products` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Price` int DEFAULT NULL,
  `CategoryID` int NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `UpdatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

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

> Products

```
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Camera','Fujifilm X-S10 Mirrorless',121500,1);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Bulb','wipro 3D LED Bulb',1000,1);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Kettle','KENT 16023 Electric Glass Kettle 1.7 L',1245,1);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Charger','Apple Wireless Charger',25000,1);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Lamp','Floor lamp 2 ft',8000,1);

INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Samsung Galaxy M12','Blue,6GB RAM, 128GB Storage',12499,2);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('OnePlus Nord 2 5G','Blue Haze, 8GB RAM, 128GB Storage',98000,2);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Apple Iphone 12','128 GB Blue',120000,2);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Apple Iphone 13 Pro','128 GB Gold',158000,2);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Note 10 +','Samsung Note 10+ 128 GB, 12GB',85000,2);

INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('To Paradise','Hanya Yanagihara',581,3);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('The Maid','A gripping read in mystery books, the hotly-anticipated debut for 2022 and an international No.1 bestseller ',384,3);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Hope Behind Bars','Notes from Indian Prisons',473,3);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('The Gollancz','The Gollancz Book of South Asian Science Fiction Volume 2',563,3);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Bhagavad Gita	','Bhagavad Gita, the epochal Indian classic brimming with eternal wisdom, needs no introduction. Set in the narrative framework of a discourse between the Supreme Lord Krishna and his disciple Arjun on the verge of the Mahabharat war, it is a comprehensive and easy-to-understand summary of Vedic philosophy.',719,3);

INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Stainless Steel','Generic Stainless Steel Pan Pot Rack Cover Lid Rest Stand Spoon Holder Home Applicance The Goods For',3500,4);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Cleaning Brush','Kitssential® Foldable Cleaning Brush Feather Microfiber Duster Magic Dust Cleaner with Extendable Rod',389,4);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Handcrafted Palm','eCraftIndia Golden Handcrafted Palm Buddha Polyresin Showpiece (12.5 cm x 7.5 cm x 17.5 cm, Black)',12999,4);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Antique Music Canon','Antique Music Decorative Canon',25232,4);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Floor Cleaner','Rishabh Cotton Floor Cleaning Large Size Duster/Cloth/MOP/Pocha (Off White, 24 X 24 Inch - Pack of 6)',1232,4);

INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Pant','Symbol Mens Slim Dress Pants',1700,5);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Sneaker','Women Red Dragonfly Embroidery Sneakers Shoes',4320,5);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Kurta','Womens Pure Cotton Straight Kurta',1800,5);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Sari','Kasmiri Red pure cotton',7500,5);
INSERT INTO Products (Name,Description,Price,CategoryID) VALUES ('Coat','Mens blazer',12000,5);

```
