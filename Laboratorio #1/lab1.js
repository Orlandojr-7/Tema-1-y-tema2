//Parte #1

let nombre = "Orlando";       
let edad = 19;             
let esEstudiante = true;   

console.log("valores iniciales:");
console.log("nombre:", nombre);
console.log("edad:", edad);
console.log("es estudiante:", esEstudiante);

nombre = "jose";
edad = 30;
esEstudiante = false;

console.log("valores actualizados:");
console.log("nombre:", nombre);
console.log("edad:", edad);
console.log("es estudiante:", esEstudiante);

//Parte #2
let a = 20;
let b = 10;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;

console.log("operaciones matemáticas:");
console.log("suma (a + b):", suma);
console.log("resta (a - b):", resta);
console.log("multiplicación (a * b):", multiplicacion);
console.log("división (a / b):", division);

console.log("comparaciones:");
console.log("a == b:", a == b);     
console.log("a != b:", a != b);     
console.log("a > b:", a > b);       
console.log("a < b:", a < b);       
console.log("a >= b:", a >= b);     
console.log("a <= b:", a <= b);     

//Parte #3

let esMayorDeEdad = true; 
let tieneLicencia = false; 

let puedeConducir = esMayorDeEdad && tieneLicencia; 
let mensajeConducir = puedeConducir 
    ? "La persona puede conducir." 
    : "La persona no puede conducir.";

console.log("uso de operadores lógicos:");
console.log("es mayor de edad:", esMayorDeEdad);
console.log("tiene licencia:", tieneLicencia);
console.log(mensajeConducir);

let nombres = "Orlando";
let apellido = "Duran";

let mensajeBienvenida1 = "hola, " + nombres + " " + apellido + "! bienvenido a nuestro sistema.";

let mensajeBienvenida2 = `hola, ${nombres} ${apellido}! bienvenido a nuestro sistema.`;

console.log("\nConcatenación de Strings:");
console.log("Usando concatenación tradicional:", mensajeBienvenida1);
console.log("Usando template literals:", mensajeBienvenida2);


//Parte #4
let nombre1 = prompt("¿Cuál es tu nombre?");
let edad1 = prompt("¿Cuántos años tienes?");
let esEstudiante1 = prompt("¿Eres estudiante? (sí/no)").toLowerCase();

edad = Number(edad);

let tieneDescuento = esEstudiante1 === "sí" || esEstudiante1 === "si"; 

if (esMayorDeEdad) {
    console.log(`Hola ${nombre1}, eres mayor de edad.`);
} else {
    console.log(`Hola ${nombre1}, eres menor de edad.`);
}

if (tieneDescuento) {
    console.log(`${nombre1}, tienes derecho a un descuento por ser estudiante.`);
} else {
    console.log(`${nombre1}, no tienes derecho a un descuento.`);
}

