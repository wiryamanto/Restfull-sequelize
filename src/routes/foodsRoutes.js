const foodsRoutes = require("express").Router();
const foodsControllers = require("../controllers/foodsControllers");
const authMiddleware = require("../helpers/authMiddleware");

foodsRoutes.get("/",authMiddleware.checkLogin, foodsControllers.getAllFoods)
foodsRoutes.post("/", foodsControllers.postFoods)
foodsRoutes.get("/:id", foodsControllers.getDataById)
foodsRoutes.put("/:id", foodsControllers.updateFoods)
foodsRoutes.delete("/:id",foodsControllers.deleteFood)

module.exports= foodsRoutes;