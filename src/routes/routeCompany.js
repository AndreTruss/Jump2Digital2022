const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/controllers");

router.get( "/size", controllers.sizeOrder );
router.get( "/founded", controllers.foundationOrder );
router.get( "/numbers", controllers.countCompanies );

module.exports = router;