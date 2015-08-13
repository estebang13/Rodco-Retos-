//main.js
var event = require('events');
var calculos = require("./module");
var eventEmitter=event.EventEmitter;
var emisor= new eventEmitter();

// se implementan las funciones on de los emisores 
emisor.on('calculoFac',function(n){
     console.log('Factorial de "'+n+'"es:"'+calculos.fact(n)+'"');
})
emisor.on('calculoFib',function(n){
     console.log('Fibonacci de "'+n+'"es:"'+calculos.fibo(n)+'"');
})
emisor.on('calculoPrim',function(n){
     console.log('El numero "'+n+'"es primo:"'+calculos.primo(n)+'"');
})

var i=1;
setInterval(function(){
   if(i==20){
   	console.log('\n'+'Iniciando otra vez...'+'\n');
   	i=1;
   };
   //llamado a los metodos on de cada funcion.
   emisor.emit('calculoFac', i);
   emisor.emit('calculoFib', i);
   emisor.emit('calculoPrim', i);
   i++;
}, 1000); 
