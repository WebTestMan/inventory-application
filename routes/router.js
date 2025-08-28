const { Router } = require("express");
const router = Router();
const inventoryController = require("../controllers/inventoryController");

router.get("/", inventoryController.getCharacters);
router.get("/categories", inventoryController.getCategories);
router.get("/factions", inventoryController.getFactions);
router.get("/add", inventoryController.addCharacterGET);
router.post("/add", inventoryController.addCharacterPOST);
router.get("/delete", inventoryController.deleteCharacterGET);
router.post("/delete", inventoryController.deleteCharacterPOST);

module.exports = router;
