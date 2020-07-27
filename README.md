# Project Description
A PERN stack website made for managing day to day tasks. The website Implements main CRUD features.

# Development Technologies
* HTML5
* CSS3
* Javascript ES6
* NodeJs v12.18.1
* ExpressJs v1.0.1
* psql (PostgreSQL) 9.5.21 
* Bootstrap v4
* React v16.13.1
* npm v6.14.4

# Development Environment
* Visual studio code
* Live server vscode extension
* React devtools extension for mozilla firefox browser
* Mozilla firefox browser

# User Manual
### Note: 
Make sure to install all tools in Development Technologies before start.

## 1. Setup a Database
1. Open a new terminal
2. Access your postgres user in Postgres database. 
```sh
psql -h localhost -U postgres
```
3. Execute 
```sh
\c todos
```
4. Now, Execute the commands in *Server/database.sql*
#### Second Alternative
If you have on visual studio code the mssql extension. You could simply execute *Server/database.sql* file.  
*Now, your database is setup completlely, you can run the app*.

## 2. Run the backend
```sh
cd server
npm install
npm start
```
## 4. Run the frontend
```sh
cd client
npm install
npm start
```

# Illustrative video

https://youtu.be/q8Rv2O-r1wA
