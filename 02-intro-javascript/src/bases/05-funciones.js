/* Funciones en JS */

/* function saludar (nombre){
    return `Hola ${nombre}`;
} */

const saludar = function (nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola Mundo`;

const getUser = () => {
    return {
        id: '12345',
        username: 'giogio233',
    }
}

const getUser2 = () => ({
        id: '12345',
        username: 'giogio233',
    });

const user = getUser2();

console.log(saludar2('Paulo'));
console.log(saludar3('Luz'));
console.log(saludar4());
console.log(getUser());
console.log(user);

/* Función explícita */
function getUsuarioActivo(nombre) {
    return {
        id: '4576547',
        username: nombre,
    }
}

const usuarioActivo = getUsuarioActivo('PauloDaniel');
console.log(usuarioActivo);

/* Función flecha que retorna un objeto implícito */
const getUsuarioActivo2 = (nombre) => ({
    id: '4576547',
    username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2('PauloDaniel');
console.log(usuarioActivo2);
