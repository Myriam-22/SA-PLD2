// Temperatura celsius
let temperaturaCelsius;


while (true) {
    // Temperatura solicitada al usuario
    const entradaUsuario = prompt("Ingresa la temperatura en grados Celsius:");

    temperaturaCelsius = Number(entradaUsuario);


    if (!isNaN(temperaturaCelsius)) {
        break;
    }
}

// Conversion de grados a fahrenheit
const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

// Conversion de grados a kelvin
const temperaturaKelvin = temperaturaCelsius + 273.15;

console.log("Grados Kelvin:", temperaturaKelvin);
console.log("Grados Fahrenheit:", temperaturaFahrenheit);
