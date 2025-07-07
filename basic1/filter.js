
const coding = ["akanksha", "Aparna", "Priya", "Neha"]

  const value  = coding.forEach( (item) => {

   const value =  console.log(item);

})
//console.log(value)

//

const myNum = [1,2,3,4,5,6, 7,]

const Newnumb = myNum.filter( ( num) => num >5  )

//console.log(Newnumb)




const arr = [1, 2, 3, 5 ]

const num22 = arr.filter( (num7) => {

   return  num7 > 2
})

//console.log(num22)







const books = [

{title : "Book one", genre : "fiction",  publish : 1981, edition : 2002},

{title : "Book two", genre : "non fiction",  publish : 1990, edition : 2005},

{title : "Book three", genre : "history",  publish : 2003, edition : 20012},

{title : "Book four", genre : "math",  publish : 2005, edition : 2022},

{title : "Book five", genre : "non-fiction",  publish : 2008, edition : 2009},

{title : "Book six", genre : "fenglishiction",  publish : 2020, edition : 2007},
{title : "Book three", genre : "history",  publish : 2003, edition : 20012},

]

let userbooks = books.filter ( (bk) => bk.genre === "history" )
let  userbooks1 = books.filter ( (bk) => {

return bk.publish >= 2000  && bk.genre === "history"

})

console.log(userbooks)

