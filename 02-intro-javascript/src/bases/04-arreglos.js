// Arreglos en JS

// Manera poco usual de declarar un arreglo
// const arreglo = new Array(50);

const arreglo = [1, 2, 3, 4];
/* arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
arreglo.push(5); */

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( function(x){
    return x*2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);