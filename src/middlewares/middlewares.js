exports.notFoundRoute = ( req, res ) => {
    return res.status( 404 ).send({ message: `Url ${req.originalUrl} not found.` });
  }