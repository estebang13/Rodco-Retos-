//module.js

//module.js
//Creación de las fuciones de calculo
function calcFactorial(n){
	var facto=1;
    while (n!=0) {
     facto=n*facto;
      n--;
    }
    return(facto);
}
function calcFibonacci(n){
     var a=0,b=1,c;
     for(var i=1;i<=n;i++){
       c=a+b;
       b=a;
       a=c;
 }
     return a;
}
function calcPrimo(n){
         var a=0,i,n;  
         for(var i=1;i<(n+1);i++){  
         if(n%i==0){  
             a++;  
            }  
         }  
         if(a!=2){  
              return false;  
            }else{  
                return true;  
         }  
}

//implementación del module.exports en donde se llaman a las funciones previamente implemantadas.
module.exports = {
  fact: calcFactorial,
  fibo: calcFibonacci,
  primo: calcPrimo
  
       
};