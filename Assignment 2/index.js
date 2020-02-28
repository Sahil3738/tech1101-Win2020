
   // calling id from html
   const ttax = document.querySelector("#ttax");
   const rate = document.querySelector("#rate");
   const earn = document.querySelector("#earn");
   const error = document.querySelector("#error");
   const income = document.querySelector("#input") ;
 
 
  //buttons
 const Submit = document.querySelector("#sbt");
 const Clear = document.querySelector("#clr");
 
 //function to calculate tax
 function findtax(){
    const amnt = income.value;
        if(amnt<=48535){
          const a =(amnt *.15).toFixed(2);
          ttax.textContent = '$' + a;
          rate.textContent=(a/amnt*100).toFixed(2);
          const b=(amnt-a).toFixed(2); 
          earn.textContent = '$' + b; 
     }

         else if (amnt > 48535 && amnt <=97069 ) {
         const c= ((amnt -48535 ) *.205 + 7280.25).toFixed(2);
         ttax.textContent = '$' + c;
         rate.textContent=(c/amnt*100).toFixed(2);
         const d=(amnt-c).toFixed(2);  
         earn.textContent = '$' + d;

         }

        else if (amnt > 97069 && amnt <=150473 ) {
        const e= ((amnt - 97069) *.26 + 19899.14).toFixed(2);
        ttax.textContent = '$' + e;
        rate.textContent=(e/amnt*100).toFixed(2);
        const f=(amnt-e).toFixed(2); 
        earn.textContent = '$' + f;
 
     }

        else if (amnt > 150473 && amnt <=214368 ) {
        const g= ((amnt - 150473) *.29 +39122.98).toFixed(2) ;
        ttax.textContent = '$' + g;
        rate.textContent=(g/amnt*100).toFixed(2);
        const h=(amnt-g).toFixed(2);
        earn.textContent = '$' + h;


     }
        else if (amnt>214368) {
        const i= ((amnt - 214368) *.33 +62166.72).toFixed(2) ;
        ttax.textContent = '$' + i;
        rate.textContent=(i/amnt*100).toFixed(2);
        const j=(amnt-i).toFixed(2);  
        earn.textContent = '$' + j;

      }
        else if (isNaN(amnt)) {
        error.textContent ="Error: Enter a Number";
     }
      
     

     
 }
 
   // function to clear      
function clrfn() {
    income.value="";
    ttax.textContent="";
    rate.textContent="";
    earn.textContent="";
    error.textContent="";
}
      // button listners
     Submit.addEventListener("click",findtax);
     Clear.addEventListener("click",clrfn);