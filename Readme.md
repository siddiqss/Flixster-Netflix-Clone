# Flixster-Netflix Clone

## Frontend
- React JS with Context API
- Material-UI Icons inserted
- SASS based styling and animation

## Backend
- REST API with Node and Express JS
- MongoDB
- Firebase Storage for storing movies

## Demo
- Go to https://flixster-netflix-clone.herokuapp.com/
- Enter your email
- Add username and password and click Start
- Now goto login, enter your credentials and click Sign In

## Usage
- Clone the repo
- Install all the dependencies using `yarn`
- Create a .env file and store the MONGO_URL and SECRET_KEY. Make sure that you provide the correct Mongo URI and secret key can be anything (it's for security purpose)
- Now run `yarn start` to start the API server
- Open another terminal, cd into Frontend and install dependencies using `yarn`
- Create a .env file and assign the url of the backend server to REACT_APP_API_URL. In case of local machine, `http://localhost:PORT/api/`.
- Run `yarn start` to start the frontend server
  
### Preview

![Home Page](https://github.com/siddiqss/Flixster-Netflix-Clone/blob/master/Images/main.JPG)

![Movies Page](https://github.com/siddiqss/Flixster-Netflix-Clone/blob/master/Images/Movies.JPG)

![Series Page](https://github.com/siddiqss/Flixster-Netflix-Clone/blob/master/Images/Series.JPG)

*You need to properly setup MongoDB, MongoDB URI, SECREY KEY, otherwise, there may be issues*