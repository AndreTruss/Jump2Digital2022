const data = require("../database/companies.json");
const Company = require("../models/Company");

module.exports.createCollection = async () => {
    try {
        await Company.deleteMany();
        await Company.insertMany( data );
        console.log( "Documents created" );
    } catch (error) {
        console.log( "Documents NOT created" );
    }
};