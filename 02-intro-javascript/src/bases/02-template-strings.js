

const nombre = 'Daniel';
const apellido = 'Vázquez';

const nombreCompleto = `
Hola 
${nombre} 
${apellido}
${10+10}
`;
console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hola ${nombre} desde una función`;
}

console.log(`Este es un saludo: ${getSaludo('Paulo')}`);