

const numbers=[5,7,8,10,12];
//  const output=[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result=element*element;
    
//    output.push(result)
// }

// function square(element){
//     return element*element
   

// }

// const square=element=>element*element;
// const square=x=>x*x;


// const result=numbers.map( function (element,){

//     return element*element

// });


// const result=numbers.map(x=>x*x)

const result= numbers.filter(x=>x>8);
const isThere=numbers.find(x=>x>5);

console.log(result);

console.log(isThere);

