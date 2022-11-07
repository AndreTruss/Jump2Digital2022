const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
    {
        id: { type: String },
        website: { type: String },
        name: { type: String },
        founded: { type: Number },
        size: { type: String },
        locality: { type: String },
        region: { type: String },
        country: { type: String },
        industry: { type: String },
        linkedin_url: { type: String },
    },
    { versionKey: false }, { timestamps: true }
    );
    
    const Company = mongoose.model("Company", CompanySchema);
    
module.exports = Company;