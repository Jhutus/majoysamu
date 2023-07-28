// Lista de códigos válidos y nombres asociados con información adicional
const codigosValidos = {
    "ABCDE": { nombre: "Samantha Pineda", tipo: "mujer" },
    "FGHI1": { nombre: "Juliana", tipo: "mujer" },
    "FGHI2": { nombre: "Daniel Roa", tipo: "hombre" },
    "FGHI3": { nombre: "Estiven Blanco", tipo: "hombre" },
    "FGHI4": { nombre: "Breinner Santiago Gonzales", tipo: "hombre" },
    "FGHI5": { nombre: "Felipe Muñoz", tipo: "hombre" },
    "FGHI6": { nombre: "Julian Almanza", tipo: "hombre" },
    "FGHI7": { nombre: "Andres Almanza", tipo: "hombre" },
    "FGHI8": { nombre: "Sergio", tipo: "hombre" },
    "FGHI9": { nombre: "Jose Bermudez", tipo: "hombre" },
    "FGHI0": { nombre: "Santiago Santafé", tipo: "hombre" },
    "KGHI0": { nombre: "Alejandro Olarte", tipo: "hombre" },
    "KGHI1": { nombre: "Mateo Quiñonez", tipo: "hombre" },
    "KGHI2": { nombre: "Sebastian Muñoz", tipo: "hombre" },
    "KGHI3": { nombre: "Sergio Huertas", tipo: "hombre" },
    "KGHI4": { nombre: "Sara Ali", tipo: "mujer" },
    "KGHI5": { nombre: "Diana Avila", tipo: "mujer" },
    "KGHI6": { nombre: "Aura Parra", tipo: "mujer" },
    "KGHI7": { nombre: "Ana Maria Zorro", tipo: "mujer" },
    "KGHI8": { nombre: "Paula Sanchez", tipo: "mujer" },
    "KGHI9": { nombre: "Isis Blandon", tipo: "mujer" },
    "LGHI0": { nombre: "Geraldine Diaz", tipo: "mujer" },
    "LGHI1": { nombre: "Sara Ruiz", tipo: "mujer" },
    "LGHI2": { nombre: "Yeimy Pulido", tipo: "mujer" },
    "LGHI3": { nombre: "Luna Alvarez", tipo: "mujer" },
    "LGHI4": { nombre: "David Torres", tipo: "hombre" },
    "LGHI5": { nombre: "Nicolas Sanchez", tipo: "hombre" },
    "LGHI6": { nombre: "Daniel Valbuena", tipo: "hombre" },
    "LGHI7": { nombre: "Camila Rodriguez", tipo: "mujer" },
    "LGHI8": { nombre: "Sebastian Olmos", tipo: "hombre" },
    "LGHI9": { nombre: "Luisa Oviedo", tipo: "mujer" },
    "PGHI0": { nombre: "Ana Calderon", tipo: "mujer" },
    "PGHI1": { nombre: "Karen Sofia Herrera", tipo: "mujer" },
    "PGHI2": { nombre: "Sara Quinto", tipo: "mujer" },
    "PGHI3": { nombre: "Mathias Lopez", tipo: "hombre" },
    "PGHI4": { nombre: "Luis Piracun", tipo: "hombre" },
    "PGHI5": { nombre: "Juan Sebastian Cardenas", tipo: "hombre" },
    "PGHI6": { nombre: "Andres Ardila", tipo: "hombre" },
    "PGHI7": { nombre: "Andres Obando", tipo: "hombre" },
    "PGHI8": { nombre: "Celene Alvarez", tipo: "mujer" },
    "PGHI9": { nombre: "Sebastian", tipo: "hombre" },
    "YGHI0": { nombre: "Luisa", tipo: "mujer" },
    "YGHI1": { nombre: "Mafe Muñoz", tipo: "mujer" },
    "YGHI2": { nombre: "Mafe Fajardo", tipo: "mujer" },
    "YGHI3": { nombre: "Majo Pineda", tipo: "mujer" },
    "YGHI4": { nombre: "Diego Moreno", tipo: "hombre" },
    "YGHI5": { nombre: "Juan David Muñoz", tipo: "hombre" },
    "YGHI6": { nombre: "Sofia Tique", tipo: "mujer" },
    "YGHI7": { nombre: "Familia Mejia Castro", tipo: "familia" },
    "YGHI8": { nombre: "Familia Mejia Triviño", tipo: "familia" },
    "YGHI9": { nombre: "Ledys Castro", tipo: "mujer" },
    "WGHI0": { nombre: "Familia Castro Ortiz", tipo: "familia" },
    "WGHI1": { nombre: "Familia Castro Carvajalino", tipo: "familia" },
    "WGHI2": { nombre: "Familia Cabezas Ortiz", tipo: "familia" },
    "WGHI3": { nombre: "Familia Torrez Ortiz", tipo: "familia" },
    "WGHI4": { nombre: "Francisco Ortiz", tipo: "hombre" },
    "WGHI5": { nombre: "Familia Castro Rincon", tipo: "familia" },
    "WGHI6": { nombre: "Familia Garcia Castro", tipo: "familia" },
    "WGHI7": { nombre: "Betsy Castro", tipo: "mujer" },
    "WGHI8": { nombre: "Familia Otalora Cadena", tipo: "familia" },
    "WGHI9": { nombre: "Familia Castro Rivera", tipo: "familia" },
    "TGHI0": { nombre: "Familia Castro Gusi", tipo: "familia" },
    "TGHI1": { nombre: "Familia Otalora Gonzales", tipo: "familia" },
    "TGHI2": { nombre: "Familia Castro Sanguino", tipo: "familia" },
    "TGHI3": { nombre: "Elizabeth Otalora", tipo: "mujer" },
    "TGHI4": { nombre: "Familia Peña Aragon", tipo: "familia" },
    "TGHI5": { nombre: "Familia Peña Lemus", tipo: "familia" },
    "TGHI6": { nombre: "Familia Rincon Mendez", tipo: "familia" },
    "TGHI7": { nombre: "Fernando Cubillos", tipo: "hombre" },
    "TGHI8": { nombre: "Familia Leguizamon Yate", tipo: "familia" },
    "TGHI9": { nombre: "Diana Caro", tipo: "mujer" },
    "MGHI0": { nombre: "Oscar Castaño", tipo: "hombre" },
    "MGHI1": { nombre: "Familia Botello Mesa", tipo: "familia" }
    // Agrega los demás códigos y nombres aquí con sus respectivos tipos
};

// Obtener referencias a los elementos HTML
const paginaInicio = document.getElementById("pagina-inicio");
const codigoInput = document.getElementById("codigo-input");
const verificarBtn = document.getElementById("verificar-btn");
const paginaResultado = document.getElementById("pagina-resultado");
const paginaInvalido = document.getElementById("pagina-invalido");
const tarjeta1 = document.getElementById("tarjeta1");
const tarjeta2 = document.getElementById("tarjeta2");
const tarjeta3 = document.getElementById("tarjeta3");
const tarjeta4 = document.getElementById("tarjeta4");
const tarjetaError = document.getElementById("tarjetaError");
const nuevaVerificacionBtn = document.getElementById("nueva-verificacion-btn");
const nuevaVerificacionBtn2 = document.getElementById("nueva-verificacion-btn2");
const tarjeta1back = document.getElementById("tarjeta1back");
const tarjeta2back = document.getElementById("tarjeta2back");
const tarjeta3back = document.getElementById("tarjeta3back");
const tarjeta4back = document.getElementById("tarjeta4back");


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

        tarjeta1.textContent = `${generoSaludo}, ${invitado.nombre}.`;
        tarjeta1back.textContent = `Estás cordialmente ${invitacion} a nuestra fiesta de 15.`
        tarjeta2.textContent = "Lugar";
        tarjeta3.textContent = "Fecha";
        tarjeta4.textContent = "Hora";
        // Ocultar la página de inicio y mostrar la página de resultado
        paginaInicio.classList.add("hidden");
        paginaResultado.classList.remove("hidden");

    } else {
        tarjetaError.textContent = "Lo siento, tu código no tiene una invitación asignada. Por favor, ingresa el código correcto.";
        paginaInicio.classList.add("hidden");
        paginaResultado.classList.add("hidden");
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

// Agregar eventos a las tarjetas para cambiar su contenido al hacer clic
tarjeta1.addEventListener("click", function () {
    tarjeta1back.classList.remove("hidden");
    tarjeta1.classList.add("hidden");
});
tarjeta2.addEventListener("click", function () {
    tarjeta2back.classList.remove("hidden");
    tarjeta2.classList.add("hidden");
});

tarjeta3.addEventListener("click", function () {
    tarjeta3back.classList.remove("hidden");
    tarjeta3.classList.add("hidden");
});

tarjeta4.addEventListener("click", function () {
    tarjeta4back.classList.remove("hidden");
    tarjeta4.classList.add("hidden");
});