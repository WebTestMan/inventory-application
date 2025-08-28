const { Router } = require("express");
const router = Router();
const inventoryController = require("../controllers/inventoryController");

router.get("/", inventoryController.getCharacters);

module.exports = router;