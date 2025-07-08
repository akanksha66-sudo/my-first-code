const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, curl) {
   // console.log(`acc : ${acc}, curl: ${curl} `);

   return acc + curl

}, 0)

//console.log(myTotal);


const myvalue = myNums.reduce((acc, cur) => acc + cur, 0) // arrow function reduse
//console.log(myvalue)


const shoppingCart = [{

      itemName: "js course",
      price: 99999

   },


   {

      itemName: "android course",
      price: 2700

   },

   {

      itemName: "py course",
      price: 7000

   },


   {

      itemName: "Mobile course",
      price: 2000

   },


]

const pricepay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(pricepay)