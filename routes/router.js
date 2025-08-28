const { Router } = require("express");
const router = Router();
const inventoryController = require("../controllers/inventoryController");

router.get("/", inventoryController.getCharacters);
router.get("/categories", inventoryController.getCategories);
router.get("/factions", inventoryController.getFactions);

module.exports = router;
