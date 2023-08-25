// Lista de códigos válidos y nombres asociados con información adicional
const codigosValidos = {
    "SYMA9F": { nombre: "Samantha Pineda", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMF8T": { nombre: "Juliana Valbuena", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMR5T": { nombre: "Daniel Roa", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMN4I": { nombre: "Estiven Blanco", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYML9O": { nombre: "Breinner Santiago Gonzales", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMP3E": { nombre: "Felipe Muñoz", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMI94": { nombre: "Julian Almanza", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMH4F": { nombre: "Andres Almanza", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYME3E": { nombre: "Sergio Valbuena", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMB6Y": { nombre: "Jose Bermudez", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMM7U": { nombre: "Santiago Santafé", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMS3D": { nombre: "Alejandro Olarte", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMV6G": { nombre: "Mateo Quiñonez", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMN8I": { nombre: "Sebastian Muñoz", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMK9O": { nombre: "Sergio Huertas", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMC5V": { nombre: "Sara Ali", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMB6G": { nombre: "Diana Ávila", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMZ3G": { nombre: "Aura Parra", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMH8K": { nombre: "Ana Maria Zorro", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMG5T": { nombre: "Paula Sanchez", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMC8M": { nombre: "Isis Blandon", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMS3F": { nombre: "Geraldine Díaz", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMH6T": { nombre: "Sara Ruiz", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMS8K": { nombre: "Yeimy Pulido", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMK8Q": { nombre: "Luna Alvarez", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYML4M": { nombre: "David Torres", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMC4J": { nombre: "Nicolas Sanchez", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMS1L": { nombre: "Daniel Valbuena", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYML6F": { nombre: "Camila Rodríguez", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMF3Y": { nombre: "Sebastian Olmos", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMY5D": { nombre: "Luisa Oviedo", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMD2B": { nombre: "Ana Calderon", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMB8N": { nombre: "Karen Sofía Herrera", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMN7T": { nombre: "Sara Quinto", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMT4Q": { nombre: "Mathias López", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMQ2H": { nombre: "Luis Piracun", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMH7J": { nombre: "Juan Sebastian Cardenas", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMJ4Z": { nombre: "Andres Ardila", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMZ6M": { nombre: "Andres Obando", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMM8I": { nombre: "Celene Alvarez", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMI3D": { nombre: "Sebastian Angel", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMD5V": { nombre: "Luisa Vargas", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMV3Q": { nombre: "Mafe Muñoz", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMQ4Y": { nombre: "Mafe Fajardo", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMR7L": { nombre: "Majo Pineda", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYML2D": { nombre: "Diego Moreno", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMD1A": { nombre: "Juan David Muñoz", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMA7M": { nombre: "Sofia Tique", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMK8L": { nombre: "Familia Mejía Castro", tipo: "familia" , cantidad: "5", palabra: "Están"},
    "SYME3U": { nombre: "Familia Mejía Triviño", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMF5T": { nombre: "Ledys Castro", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMT7P": { nombre: "Familia Castro Ortiz", tipo: "familia" , cantidad: "2", palabra: "Están"},
    "SYMP4S": { nombre: "Familia Castro Carvajalino", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMS1X": { nombre: "Familia Cabezas Ortiz", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMX5T": { nombre: "Familia Torrez Ortiz", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMF9P": { nombre: "Francisco Ortiz", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMS8J": { nombre: "Familia Castro Rincón", tipo: "familia" , cantidad: "4", palabra: "Están"},
    "SYMF6Y": { nombre: "Familia Garcia Castro", tipo: "familia" , cantidad: "2", palabra: "Están"},
    "SYMK9V": { nombre: "Betsy Castro", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMF1Q": { nombre: "Familia Otalora Cadena", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMC6Y": { nombre: "Familia Castro Rivera", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMJ9S": { nombre: "Familia Castro Gusi", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMC8K": { nombre: "Familia Otalora Gonzales", tipo: "familia" , cantidad: "4", palabra: "Están"},
    "SYML4D": { nombre: "Familia Castro Sanguino", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMT7T": { nombre: "Elizabeth Otalora", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMZ4A": { nombre: "Hermanas Peña Aragón", tipo: "hermanas" , cantidad: "2", palabra: "Están"},
    "SYMC6T": { nombre: "Familia Peña Lemus", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMY8Y": { nombre: "Familia Rincon Méndez", tipo: "familia" , cantidad: "3", palabra: "Están"},
    "SYMA2Z": { nombre: "Fernando Cubillos", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMN9I": { nombre: "Familia Leguizamón Yate", tipo: "familia" , cantidad: "4", palabra: "Están"},
    "SYMM3W": { nombre: "Diana Caro", tipo: "mujer" , cantidad: "1", palabra: "Estás"},
    "SYMW5R": { nombre: "Oscar Castaño", tipo: "hombre" , cantidad: "1", palabra: "Estás"},
    "SYMX5W": { nombre: "Familia Botello Mesa", tipo: "familia", cantidad: "3", palabra: "Están" },
    "SYM83J": { nombre: "Danna Gonzales", tipo: "mujer", cantidad: "1", palabra: "Estás" },
    "SYMI41": { nombre: "Consuelo Mejía", tipo: "mujer", cantidad: "1", palabra: "Estás" },
    "SYMP20": { nombre: "Juan Mejía", tipo: "hombre", cantidad: "1", palabra: "Estás" },
    "SYM59A": { nombre: "Roberto Mejía", tipo: "hombre", cantidad: "1", palabra: "Estás" },
    "SYM67N": { nombre: "Guillermo Mejía ", tipo: "hombre", cantidad: "1", palabra: "Estás" },
    "SYMX32": { nombre: "Clara Mejía", tipo: "mujer", cantidad: "1", palabra: "Estás" },
    "SYM94K": { nombre: "Marta Mejía", tipo: "mujer", cantidad: "1", palabra: "Estás" },
    "SYMS21": { nombre: "Gloria Mejía", tipo: "mujer", cantidad: "1", palabra: "Estás" },
    "SYM46Q": { nombre: "Familia Mejía Londoño", tipo: "familia", cantidad: "2", palabra: "" },
    "SYM12A": { nombre: "Karol Buitrago", tipo: "mujer", cantidad: "1", palabra: "Estás" },
    "SYM1T4": { nombre: "Luisa Ochoa", tipo: "mujer", cantidad: "1", palabra: "Estás" },
    "SYM76H": { nombre: "Jhonatan Garzon", tipo: "hombre", cantidad: "1", palabra: "Estás" },
    "SYMK81": { nombre: "Nicole Carletti", tipo: "mujer", cantidad: "1", palabra: "Estás" },
    "SYMB43": { nombre: "Jose y Laura", tipo: "familia", cantidad: "2", palabra: "Están" }
    // Agrega los demás códigos y nombres aquí con sus respectivos tipos
};

// Obtener referencias a los elementos HTML
const paginaInicio = document.getElementById("pagina-inicio");
const codigoInput = document.getElementById("codigo-input");
const verificarBtn = document.getElementById("verificar-btn");
const paginaResultado = document.getElementById("pagina-resultado");
const paginaInvalido = document.getElementById("pagina-invalido");
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
            generoSaludo = "Bienvenidos";
            invitacion = "invitados";
        } else if (invitado.tipo === "hermanas"){
            generoSaludo = "Bienvenidas";
            invitacion = "invitadas"
        }
        titulo.innerHTML = `${invitado.nombre}`;
        tarjeta1back.innerHTML = `${generoSaludo}, <br>${invitado.palabra} cordialmente <br> ${invitacion} a nuestra <br> fiesta de 15.`;
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
