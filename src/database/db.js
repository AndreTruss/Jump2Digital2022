const mongoose = require( 'mongoose' );
const MONGODB_URI = 'mongodb://localhost:27017/Jump2Digital'

module.exports.connectDB = async() => {
    try {
        await mongoose.connect( MONGODB_URI );
        console.log("Database works correctly.");

    } catch( err ) { console.log("Database doesn't works."); }
};
