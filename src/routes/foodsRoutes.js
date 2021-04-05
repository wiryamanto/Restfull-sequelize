const foodsRoutes = require("express").Router();
const foodsControllers = require("../controllers/foodsControllers")

foodsRoutes.get("/", foodsControllers.getAllFoods)
foodsRoutes.post("/", foodsControllers.postFoods)
foodsRoutes.get("/:id", foodsControllers.getDataById)

module.exports= foodsRoutes;