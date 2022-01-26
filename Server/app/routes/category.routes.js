
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const Categoryak=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", Categoryak.create);
  
    // Retrieve all Tutorials
    
    router.get("/", Categoryak.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", Categoryak.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Categoryak.findOne);
    // Update a Tutorial with id
    router.put("/:id", Categoryak.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Categoryak.delete);
  
    // Delete all Tutorials
    router.delete("/", Categoryak.deleteAll);
  
    app.use('/api/Categoryaks', router);
  };