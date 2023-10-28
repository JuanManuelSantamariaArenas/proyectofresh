import Bodega from "lenguajeuno\mundo\clases.js"

class Consola {
    constructor() {
        this.bodega = new Bodega();
    }
    
    obtAgregarEmpleado() {
        this.bodega.agregarEmpleado(11, "Lucas");
        let empleados = this.bodega.obtenerEmpleados();
        for (empleado in empleados) {
            document.write(empleado.obtenerInformacion());
        }
        return
    }
}