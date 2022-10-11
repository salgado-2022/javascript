// const numero = 100;

//  let Decametro = numero/1000;
//  let hectometro = numero/10000;
//  let kilometro = numero/100000;
//  let megametro = numero/100000000;
//  let gigametro = numero/10**11;
//  let nanometro = numero*10000000;
//  let micrometro = numero*10000;
//  let milimetro = numero*10;
//  let decimetro = numero/10;

// document.write('<br>'+'<center>'+'<p>Decametro: '+Decametro+' </p>'+'</center>'+
//                 '<br>'+'<center>'+'<p>Hectometro: '+hectometro+' </p>'+'</center>'+
//                 '<br>'+'<center>'+'<p>Kilometro: '+kilometro+' </p>'+'</center>'+
//                 '<br>'+'<center>'+'<p>Megametro: '+megametro+' </p>'+'</center>'+
//                 '<br>'+'<center>'+'<p>Decametro: '+gigametro+' </p>'+'</center>'+
//                 '<br>'+'<center>'+'<p>Nanometro: '+nanometro+' </p>'+'</center>'+
//                 '<br>'+'<center>'+'<p>Micrometro: '+micrometro+' </p>'+'</center>'+
//                 '<br>'+'<center>'+'<p>Milimetro: '+milimetro+' </p>'+'</center>'+
//                 '<br>'+'<center>'+'<p>Decimetro: '+decimetro+' </p>'+'</center>');
                

let palabra ="";
let x = 0;

while(palabra!='fin'){
    palabra= prompt('Digite una palabra')
    palabra= palabra.toLowerCase();
    hola = palabra.length;
    console.log(palabra);
    console.log('el numero de caracteres de la palabra es de: '+ hola)
    x++;
    console.log('el ciclo se ha repetido: '+x+ ' veces');
}
