var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
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

  
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){

  res.render('admin/add-product',{admin:true})
  
});

router.post('/add-product',function(req,res){
  console.log(req.body)
  console.log(req.files.image)
  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/product-image/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-product')
      }
      else{
        console.log(err)
      }
    })
    
  })
});

module.exports = router;
