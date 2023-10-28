import Consola from "lenguajeuno\interfas\consola.js"

var consolaUno = new Consola();
const botonAgregarempleados = document.getElementById("agregarEmpleados");
botonAgregarempleados.addEventListener("click", consolaUno.obtAgregarEmpleado.bind(consolaUno));
// let botonAgregarEmpreados = document.createElement("button");
// let botonAgregarPuntosExperiencia = document.createElement("button");
// botonAgregarEmpreados.innerHTML = "AGREGAR EMPLEADOS";
// botonAgregarPuntosExperiencia.innerHTML = "AGREGAR PUNTOS EXPERIENCIA";
// document.body.appendChild(botonAgregarEmpreados);
// document.write("<br>")
// document.body.appendChild(botonAgregarPuntosExperiencia);