const shoppingCart = require("./Ex04Module.js");
console.log(shoppingCart)
shoppingCart.additem({id:123,name:"iphone",price:85000});
shoppingCart.additem({id:124,name:"laptop",price:120000});
shoppingCart.additem({id:125,name:"Bike",price:4500000});
shoppingCart.additem({id:126,name:"fire crackers",price:10000});
const bill = shoppingCart.billamount();
console.log(`total bill is ${bill}`)
const items = shoppingCart.getall();
for(const item of items){
    console.log(item.name)
}