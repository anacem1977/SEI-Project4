# Software Engineer Immersive Program - Final Project

<div align="center">

![Beer Encyclopedia](https://user-images.githubusercontent.com/74725198/111528708-17efd500-8727-11eb-9cc6-9cdeefd7b0c1.png)

An online app to learn interesting facts about beers. Cheers! 🍻
</div>

---

<br>

## Description & Motivation
To have available information to reserach about beers while drinking and learn more about its origins, styles, flavor, color, glassware to use and breweries.

## Table of Contents
1. [General Info](#general-info)
2. [Planning](#planning)
    + [User Stories](/planning/userstories.md)
    + [Goals](/planning/goals.md)
    + [Wireframe](/planning/wireframes.md)
    + [ERD](/planning/erd.md)
3. [Functionality](#functionality)
4. [Technologies](#technologies)
5. [Dependencies](#dependencies)
6. [Structure](#structure)
    + [Back End](#back-end)
    + [Front End](#front-end)
7. [Installation](#installation)
8. [Sources](#sources)
9. [Author](#author)

---

<br>

## General Info
The app allows for creation of new user accounts, login, editing, and deletion of the same.  Once logged in, the user will have access to display the information available for beers, as well as to "like" beers by brand. 

## Planning
The Back-End of the app is built on a PostgresSQL database.  Tables included: 
+ **Origins** (style, country of origin and description)
+ **Substyles** (substyle, description, abv, ibu, glassware, pairing, flavor, color; foreign-key: *styleId*)
+ **Brands** (brand, abv, likes; foreign-keys: *substyleId, breweryId*)
+ **Breweries** (name, address, url)

See more:
+ [User Stories](/planning/userstories.md)
+ [Goals](/planning/goals.md)
+ [Wireframe](/planning/wireframes.md)
+ [ERD](/planning/erd.md)

---

<br>

## Functionality
The Beer Encyclopedia app uses API calls to the database for all requests:
+ Basic user authentication to access app.
+ Full CRUD users (sign up, view/edit profile, delete user)
+ Read only information accross the app.
+ Ability for user to "like" a beer brand.

### Land Page
![Home Page](https://user-images.githubusercontent.com/74725198/111514693-980e3e80-8717-11eb-9465-100a274d64a2.png)

### Origin/Styles Page
![Origin](https://user-images.githubusercontent.com/74725198/111514791-afe5c280-8717-11eb-9ddd-56e5766f771b.png)

### Beer Study Guide
![Beer Study](https://user-images.githubusercontent.com/74725198/111515282-37cbcc80-8718-11eb-9840-075a3295b708.png)

### Breweries 
![Breweries](https://user-images.githubusercontent.com/74725198/111515386-5631c800-8718-11eb-88c5-bd692f8f96c3.png)

### Tooltips
![giphy](https://user-images.githubusercontent.com/74725198/111514087-06063600-8717-11eb-943a-82829f0cc419.gif)

---

<br>

## Technologies
<div>
    <li> Standard client-side technologies : HTML5, CSS3, JavaScript</li>
    <li>Command Line: Interaction with the computer and navigating the file system.</li>
    <li>Source Control: Interaction, management and uploading files and changes on code to Git repository.</li>
    <li>Visual Studio Code: Coding on HTML, CSS, JavaScript, React and Express.</li>
    <li>Production Deployment: Pubished/deployed via Heroku (Back End) and Surge (Front End) </li>
    <li>Google Chrome Developer Tools & React Components: Debugging and solving problems in the code. </li>
    </div>


+ ![NewTech](https://img.shields.io/badge/New-Tech-purple) Bootstrap: CSS framework for developing responsive web sites.

 ---

<br>

## Dependencies
| Project      | Home Page                                    |
|--------------|----------------------------------------------|
| Express      | <https://expressjs.com/>                     |
| Body Parser      | <https://www.npmjs.com/package/body-parser>                     |
| CORS      | <https://enable-cors.org/>                     |
| method-override      | <https://www.npmjs.com/package/method-override>                     |
| Sequelize      | <https://sequelize.org/>                     |
| PostgresSQL     | <https://www.postgresql.org/>                     |
| React        | <https://reactjs.org/>                       |
| Axios       | <https://www.npmjs.com/package/axios/>                |
| React Router  | <https://reactrouter.com/> |
| Bootstrap | <https://react-bootstrap.github.io/>                   |
| Font Awesome         | <https://fontawesome.com/>                        |

---

<br>

## Structure
### Back End

- `/server.js` - Entry point for the application. It defines the express server and connects it to Postgres database.
- `config/` - Configuration for the database and dialect.
- `controllers/` - Controllers for the requests being made to the database.
- `routes/` - Routes for each of the controllers.
- `models/` - Configuration of what attributes and methods each of the tables will have in the database.
- `migrations/` - Configuration to manage the state of the database.
- `seeders/` - Data to be used to fill out the tables in the database.


### Front End
- `/app.js` - Entry point for the application, signin/signup, basic API calls, routes to components.
- `/src/components/Origin.js` - Renders generic beer styles, description and country of origin, links to Substyle.
    - `/Substyle.js`- Renders the substyles of the selected generic style. Includes description of the substyle, food pairing, suggested glassware to use and specs about color, alcohol levels and flavor. Links to Brands and Glassware.
    - `/Brand.js`- Renders the brands of the selected beer substyle. Includes alcohol level and likes. Links to Breweries.
    - `/Brewery.js`- Renders the brewery for the selected beer brand. Includes location, link to webpage and beers produced.
- `/src/components/Glassware.js` - Renders information about 'How to Serve' beers and specifics about the different beer glassware. Stand alone.
- `/src/components/QuantInfo.js` - Renders the Beer Study Guide including more specific definitions about the terms used accross the app. Stand alone.
- `/src/components/Profile.js` - Renders the logged user's profile with option to Edit and Delete.
---

<br>


## Installation
+ No special installation required: [Go to App](http://beer-encyclopaedia.surge.sh)

---

<br>


## Sources
+ https://beeradvocate.com
+ https://craftbeer.com
+ https://learn.kegerator.com
+ https://wikipedia.org

---

<br>

## Author
Ana Cecilia Maldonado Cervantes

![GitHub last commit](https://img.shields.io/github/last-commit/anacem1977/SEI-Project4-FrontEnd)