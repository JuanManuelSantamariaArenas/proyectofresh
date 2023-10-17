class Empleado {
    constructor(dni, nombre) {
        this.dni = dni;
        this.nombre = nombre;
        this.calenMensual = [];
    }

    obtenerInformacion() {
        return `DNI: ${this.dni}` + "<br>" + `NOMBRE: ${this.nombre}` + "<br>"
         + `CALENDARIO: ${this.calen_mensual}`+ "<br>";
    }
}

class Producto {
    constructor(codigo, detalle, existencia, costo) {
        this.codigo = codigo;
        this.detalle = detalle;
        this.existencia = existencia;
        this.costo = costo;
    }

    obtenerInformacion() {
        return `CODIGO: ${this.codigo}` + "<br>" + `DETALLE: ${this.detalle}` + "<br>" + 
        `EXISTENCIA: ${this.existencia}` + "<br>" + `COSTO: ${this.costo}` + "<br>";
    }
}

class PuntosExperiencia {
    constructor(codigo, nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }

    obtenerInformacion() {
        return `CODIGO; ${this.codigo}` + "<br>" + `NOMBRE: ${this.nombre}` + "<br>";
    }
}

class Bodega {
    constructor() {
        this.encargado = "";
        this.empleados = {};
        this.productos = {};
        this.puntosExperiencia = {};
    }

    agregarEmpleado(dni, nombre) {
        let empleado = new Empleado(dni, nombre);
        this.empleados[dni] = empleado;
    }

    obtenerEmpleados() {
        return Object.values(this.empleados);
    }
    
    obtenerProductos() {
        return Object.values(this.productos);
    }

    obtenerPuntoExperiencia() {
        return Object.values(this.puntosExperiencia)
    }
}

function programaOrigen() {
    let bodegaUno = new Bodega();
    bodegaUno.encargado = "Luis";
    document.write(`Encargado: ${bodegaUno.encargado}` + "<br>");
    bodegaUno.agregarEmpleado(1, "Carlos");
    bodegaUno.agregarEmpleado(2, "Fabio");
    let empleados = bodegaUno.obtenerEmpleados()
    for (const empleado of empleados) {
        document.write(empleado.obtenerInformacion())
    }
}

programaOrigen()