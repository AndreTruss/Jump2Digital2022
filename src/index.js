const express = require( 'express' );
const app = express();

const http = require( 'http' );
const server = http.createServer( app );

const routeCompany = require( './routes/routeCompany' );
const { connectDB } = require('./database/db');
const { createCollection } = require('./helpers/createCollection');
const { notFoundRoute } = require( './middlewares/middlewares');

connectDB();
createCollection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use( '/company', routeCompany );

app.use( notFoundRoute );

const PORT = 3000;
server.listen( PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
