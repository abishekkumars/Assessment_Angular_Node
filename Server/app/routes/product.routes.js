const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productak = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productak.create);
  
    // Retrieve all Tutorials
    router.get("/", productak.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", productak.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productak.findOne);
    // Update a Tutorial with id
    router.put("/:id", productak.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productak.delete);
  
    // Delete all Tutorials
    router.delete("/", productak.deleteAll);
  
    app.use('/api/productaks', router);
  };