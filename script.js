// Lista de códigos válidos y nombres asociados con información adicional
const codigosValidos = {
    "MYMA9F": { nombre: "Samantha Pineda", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMF8T": { nombre: "Juliana", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMR5T": { nombre: "Daniel Roa", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMN4I": { nombre: "Estiven Blanco", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYML9O": { nombre: "Breinner Santiago Gonzales", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMP3E": { nombre: "Felipe Muñoz", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMI94": { nombre: "Julian Almanza", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMH4F": { nombre: "Andres Almanza", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYME3E": { nombre: "Sergio", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMB6Y": { nombre: "Jose Bermudez", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMM7U": { nombre: "Santiago Santafé", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMS3D": { nombre: "Alejandro Olarte", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMV6G": { nombre: "Mateo Quiñonez", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMN8I": { nombre: "Sebastian Muñoz", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMK9O": { nombre: "Sergio Huertas", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMC5V": { nombre: "Sara Ali", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMB6G": { nombre: "Diana Ávila", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMZ3G": { nombre: "Aura Parra", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMH8K": { nombre: "Ana Maria Zorro", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMG5T": { nombre: "Paula Sanchez", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMC8M": { nombre: "Isis Blandon", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMS3F": { nombre: "Geraldine Díaz", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMH6T": { nombre: "Sara Ruiz", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMS8K": { nombre: "Yeimy Pulido", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMK8Q": { nombre: "Luna Alvarez", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYML4M": { nombre: "David Torres", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMC4J": { nombre: "Nicolas Sanchez", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMS1L": { nombre: "Daniel Valbuena", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYML6F": { nombre: "Camila Rodríguez", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMF3Y": { nombre: "Sebastian Olmos", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMY5D": { nombre: "Luisa Oviedo", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMD2B": { nombre: "Ana Calderon", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMB8N": { nombre: "Karen Sofía Herrera", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMN7T": { nombre: "Sara Quinto", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMT4Q": { nombre: "Mathias López", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMQ2H": { nombre: "Luis Piracun", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMH7J": { nombre: "Juan Sebastian Cardenas", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMJ4Z": { nombre: "Andres Ardila", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMZ6M": { nombre: "Andres Obando", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMM8I": { nombre: "Celene Alvarez", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMI3D": { nombre: "Sebastian", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMD5V": { nombre: "Luisa", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMV3Q": { nombre: "Mafe Muñoz", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMQ4Y": { nombre: "Mafe Fajardo", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMR7L": { nombre: "Majo Pineda", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYML2D": { nombre: "Diego Moreno", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMD1A": { nombre: "Juan David Muñoz", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMA7M": { nombre: "Sofia Tique", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMK8L": { nombre: "Familia Mejía Castro", tipo: "familia" , cantidad: "5", palabra: "Están"},
    "MYME3U": { nombre: "Familia Mejía Triviño", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMF5T": { nombre: "Ledys Castro", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMT7P": { nombre: "Familia Castro Ortiz", tipo: "familia" , cantidad: "2", palabra: "Están"},
    "MYMP4S": { nombre: "Familia Castro Carvajalino", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMS1X": { nombre: "Familia Cabezas Ortiz", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMX5T": { nombre: "Familia Torrez Ortiz", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMF9P": { nombre: "Francisco Ortiz", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMS8J": { nombre: "Familia Castro Rincón", tipo: "familia" , cantidad: "4", palabra: "Están"},
    "MYMF6Y": { nombre: "Familia Garcia Castro", tipo: "familia" , cantidad: "2", palabra: "Están"},
    "MYMK9V": { nombre: "Betsy Castro", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMF1Q": { nombre: "Familia Otalora Cadena", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMC6Y": { nombre: "Familia Castro Rivera", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMJ9S": { nombre: "Familia Castro Gusi", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMC8K": { nombre: "Familia Otalora Gonzales", tipo: "familia" , cantidad: "4", palabra: "Están"},
    "MYML4D": { nombre: "Familia Castro Sanguino", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMT7T": { nombre: "Elizabeth Otalora", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMZ4A": { nombre: "Familia Peña Aragón", tipo: "familia" , cantidad: "4", palabra: "Están"},
    "MYMC6T": { nombre: "Familia Peña Lemus", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMY8Y": { nombre: "Familia Rincon Méndez", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "MYMA2Z": { nombre: "Fernando Cubillos", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMN9I": { nombre: "Familia Leguizamón Yate", tipo: "familia" , cantidad: "4", palabra: "Están"},
    "MYMM3W": { nombre: "Diana Caro", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "MYMW5R": { nombre: "Oscar Castaño", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "MYMX5W": { nombre: "Familia Botello Mesa", tipo: "familia", cantidad: "3", palabra: "Están" }
    // Agrega los demás códigos y nombres aquí con sus respectivos tipos
};

// Obtener referencias a los elementos HTML
const paginaInicio = document.getElementById("pagina-inicio");
const codigoInput = document.getElementById("codigo-input");
const verificarBtn = document.getElementById("verificar-btn");
const paginaResultado = document.getElementById("pagina-resultado");
const paginaInvalido = document.getElementById("pagina-invalido");
const tarjeta1 = document.getElementById("tarjeta1");
const tarjetaError = document.getElementById("tarjetaError");
const nuevaVerificacionBtn = document.getElementById("nueva-verificacion-btn");
const nuevaVerificacionBtn2 = document.getElementById("nueva-verificacion-btn2");
const tarjeta1back = document.getElementById("tarjeta1back");
const tarjeta4back = document.getElementById("tarjeta4back");
const titulo = document.getElementById("titulo");


// Agregar un evento al botón de verificar
verificarBtn.addEventListener("click", function () {
    const codigo = codigoInput.value.toUpperCase(); // Convertir a mayúsculas para hacer la comparación

    // Verificar si el código existe en la lista de códigos válidos
    if (codigosValidos.hasOwnProperty(codigo)) {
        const invitado = codigosValidos[codigo];
        let generoSaludo, invitacion;

        if (invitado.tipo === "hombre") {
            generoSaludo = "Bienvenido";
            invitacion = "invitado";
        } else if (invitado.tipo === "mujer") {
            generoSaludo = "Bienvenida";
            invitacion = "invitada";
        } else if (invitado.tipo === "familia") {
            generoSaludo = "Bienvenida";
            invitacion = "invitados";
        }
        titulo.innerHTML = `${invitado.nombre}`;
        tarjeta1.innerHTML = `${generoSaludo}`;
        tarjeta1back.innerHTML = `${invitado.palabra} cordialmente ${invitacion} a nuestra <br> fiesta de 15.`;
        tarjeta4back.innerHTML = `${invitado.cantidad}`;
    
        // Ocultar la página de inicio y mostrar la página de resultado
        paginaInicio.classList.add("hidden");
        paginaResultado.classList.remove("hidden");

    } else {
        tarjetaError.textContent = "Lo siento, tu código no tiene una invitación asignada. Por favor, ingresa el código correcto.";
        paginaInicio.classList.add("hidden");
        paginaInvalido.classList.remove("hidden");
    }


});

// Agregar un evento al botón de nueva verificación
nuevaVerificacionBtn.addEventListener("click", function () {
    paginaResultado.classList.add("hidden");
    paginaInicio.classList.remove("hidden");
    codigoInput.value = ""; // Limpiar el valor del input
});

nuevaVerificacionBtn2.addEventListener("click", function () {
    paginaInvalido.classList.add("hidden");
    paginaInicio.classList.remove("hidden");
    codigoInput.value = ""; // Limpiar el valor del input
});
