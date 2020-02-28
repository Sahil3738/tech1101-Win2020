
console.log("sahi");
// addition
// function sum(a1, a2)
// {
//    return a1 + a2 ;

// } ;
//      console.log(sum(5,6));
// // divide
//      const Divide = function(a3,a4)
// {
//        return a3/a4 ;

// } ;
//      console.log(Divide(6,2));

//      //  substract
//      const Substract = (a5,a6,a7) =>
//      {
//          return a5 - a6 - a7 ;
//      }
//         alert("ans is " +Substract(20,10,5));

//         // add two string

//      const  add = (a8,a9) =>
//      {
//          return a8+a9;
//      }
//      console.log(add("Hello", "world"));    

//      // object
//      const animal = function()
//      {

//         const name ="Lion" ; 
//         const age =  20 ;
//         return name + " is of "+ age;
//      }
//      console.log(animal());

//      // ask for name
        
//      var name1 = prompt('what is you name',"");
//       if (name1!= null)
//       {

//          alert("your name is "  + name1);
//       }

// // How old are you and your wife?
// let husbandAge = prompt('How old are you?', '');
// let wifeAge = prompt('How old are you?', '');
  
// //  It was not working because it takes these value as a string so first there was need to convert it into integar 
// alert (  "you are " +   (parseFloat(husbandAge) + parseFloat(wifeAge))  +" years old");

// const  fname1 = document.querySelector("#fname");
// console.log(fname1);
// const start1 = document.querySelector("#start");
// const display1 = document.querySelector(".display");


// start1.addEventListener ("click", function() {
//    display1.textContent=fname1.Value;
// }

// );

// const  submit = document.getElementById('start');
// const  fname1 = document.getElementById('fname');
// const  show = document.querySelector(".display");


// submit.addEventListener("click" , function()
// {

//    show.textContent = fname1.Value;
// }
// );
// 05 feb 2020 

const dynamic = document.getElementById("dynamic");
   
const n = new Date;
dynamic.textContent = n.getFullYear();

console.log(n);


