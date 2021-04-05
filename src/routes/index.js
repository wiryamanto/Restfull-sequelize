const mainRoutes= require("express").Router();
const foodsRoutes= require("./foodsRoutes");

mainRoutes.use("/foods", foodsRoutes)
module.exports = mainRoutes;