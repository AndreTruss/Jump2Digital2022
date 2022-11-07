const mongoose = require( 'mongoose' );
// const { MONGODB_URI } = require( '../config/config' );
const MONGODB_URI = "mongodb+srv://AndreTruss:bpbUGW0U6Gxl8kOE@cluster0.lnihe.mongodb.net/jump2digital?retryWrites=true&w=majority"

module.exports.connectDB = async() => {
    try {
        await mongoose.connect( MONGODB_URI );
        console.log("Database works correctly.");

    } catch( err ) { console.log("Database doesn't works."); }
};
