var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  let products = [
    {
      name: "pendrive",
      category: "electronics",
      description: "3.0 diver fast 16gb",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-EnNiZ7jysZRecjc_Dos5BdhHjKXHHJFqwg&usqp=CAU",
      price:"5,500"
    },
    {
      name: "memory card",
      category: "",
      description: "micro sd 32gb",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKt5I3tGIhotRXFK3eM8AP1P4-QM7oecN-Cg&usqp=CAU"
    },
    {
      name: "YATin pendrive",
      category: "electronic",
      description: "3.0 driver",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9NFuKu-9ifntYSQEeen-RB1XI2ZrtL8yU7Q&usqp=CAU"
    }
  ]

  res.render('index', { products,admin:false });
});

module.exports = router;
