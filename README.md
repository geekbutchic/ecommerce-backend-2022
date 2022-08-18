### E-Commerce-Store Backend



### Deployment Notes for Heroku

* This is for a backend that has been initialized with express-generator.
* Create a new file ./.env and add following environment variable
```javascript
PORT=4000
```
* Install nodemon on the server and add custom dev command.
* > npm i nodemon
```javascript
  "scripts": {
    "start": "PORT=4000 node ./bin/www",
    "dev": "PORT=4000 nodemon ./bin/www"
  },
```
* Install CORS package if not already done.
* > npm i cors
```javascript
const cors = require("cors");
app.use(cors());
app.options("*", cors());
```

* Make sure you git commit all changes before beginning.
* Download Heroku CLI if not done already.
* Login to Heroku - make sure you have an account.
* > heroku login
* > press any key and should take you to login
* Once logged in type in command to create a remote 
* > heroku create -a app-name
* Make sure to not name the heroku app the same as git repository
* The heroku create CLI command creates a new empty application on Heroku, along with an associated empty Git repository. If you run this command from your app’s root directory, the empty Heroku Git repository is automatically set as a remote for your local repository.
* > git remote -v to show both 
* Save in .env file 