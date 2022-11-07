const Company = require("../models/Company");

exports.sizeOrder = async (req, res) => {
  try {
    const companies = await Company.find({}, 
        { name: 1, size: 1, _id: 0 })
        .sort({ size: 1 });

    res.status(200).json({ companies });

  } catch (error) {
    res.status(500).json({ error: "Error sorting companies" });
  }
}

exports.foundationOrder = async (req, res) => {
  try {
    const companies = await Company.find({}, 
        { name: 1, founded: 1, _id: 0 })
        .sort({ founded: 1 });

    res.status(200).json({ companies });

  } catch (error) {
    res.status(500).json({ error: "Error sorting companies" });
  }
}

exports.countCompanies = async (req, res) => {
  try {
    const industryNumbers = await Company.aggregate([
      { $group: { _id: "$industry", count: { $count: {} } } },
    ]).sort({ count: 1 });

    const sizeNumbers = await Company.aggregate([
      { $group: { _id: "$size", count: { $count: {} } } },
    ]).sort({ count: 1 });

    const foundedNumbers = await Company.aggregate([
      { $group: { _id: "$founded", count: { $count: {} } } },
    ]).sort({ count: 1 });

    res.status(200).json({ industryNumbers, sizeNumbers, foundedNumbers });

  } catch (error) {
    res.status(500).json({ error: "Error counting companies" });;
  }
}
