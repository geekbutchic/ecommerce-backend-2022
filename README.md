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

* 