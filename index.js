class ProductManager{
    constructor(){
        this.patch= "./datata.json"
        this.productos= []
    }
  
}

const fs = require("fs");
const manejoArchivo= async () =>{
    const products= {
      id:1,
      title: "Tomate",
      description:"Fruta de buen comer",
      price:15,
      thumbail:"",
      code:"",
      stock:7
    }
    const products2 ={
        id:2,
        title:"Cebolla",
        description:"Verdura de buen comer",
        price:20,
        thumbail:"",
        code:"",
        stock:7,
        
    }

    
    
    let productos = JSON.stringify(products)
    let productos2 = JSON.parse(productos)   
    let segundoProducto = JSON.stringify(products2) 
    console.log(segundoProducto)
    
    try{
        await  fs.promises.writeFile("./products.json" , `${productos}` , "utf-8")
        console.log("termine de escribir")
    } catch(err){
        console.log(err)
    }
    try {
          await  fs.promises.appendFile("./products.json" , `${segundoProducto}`, "utf-8")
    } catch (error) {
        console.log(error)
    }
    try{
     await  fs.promises.readFile("./products.json", "utf-8")
    }catch (err){
        console.log(err)
    }
    try {
        await fs.promises.unlink(",/products.json", "utf-8")
    } catch (error) {
            console.log(error)
    }   
}

    manejoArchivo()

  
