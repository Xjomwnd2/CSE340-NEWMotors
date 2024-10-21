/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");
const baseController = require("./controllers/baseController");
const inventoryRoute = require('./routes/inventoryRoute'); // Ensure the correct path is used




/* ********************************************************* */
// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory (optional, if not using the default)
/*app.set('views', path.join(__dirname, 'views'));
/* *********************************************************** */


/* ***********************
 * Routes
 *************************/
app.use(static);

// Index route
app.get("/", baseController.buildHome);
// Inventory routes
app.use("/inv", inventoryRoute)

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 5500; // Fallback port if not defined
const host = process.env.HOST || 'localhost'; // Fallback host if not defined
/* ***********************
 * Express Error Handler
 * Place after all other middleware
 *************************/



/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
  });
  