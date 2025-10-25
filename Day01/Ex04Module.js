// two typr first we create another one is nodejs predefined
module.exports = (function(){
    const cart =[]
    function additem(item){
        cart.push(item)
    }
    
    function getall(){
        return cart;
    }

    function billamount(){
        let bill=0.0
        for(const item of cart){
            bill += item.price
        }
        return bill
    }
    return {
        additem, getall, billamount
    }
})()