
class Empleado {
    codigo;
    nombre;
    apellido;
    correo;
    cargo;
    sueldoBruto(){
        if(this.cargo =='Jefe'){
          return 5000;  
        }else if(this.cargo =='Analista'){
            return 4000;
        }else if(this.cargo =='Programador'){
            return 3000;
        }else if (this.cargo =='Soporte'){
            return 2000;
        }else if (this.cargo =='Asistente'){
            return 1500;
        }
        
    }
    descuento(){
        let desc = this.sueldoBruto()*0.125
        return desc;
    }
    sueldoNeto(){
        let sNeto = this.sueldoBruto()-this.descuento();
        alert(`Tu Sueldo final es de S/.${sNeto}`);
    }
}
let nuevoEmpleado = new Empleado()
nuevoEmpleado.codigo = prompt("Ingrese El Codigo del Empleado")
nuevoEmpleado.nombres = prompt("Ingrese el  Nombre del Empleado")
nuevoEmpleado.Apellido = prompt("Ingrese el Apellido del Empleado")
nuevoEmpleado.correo = prompt("Ingrese el Correo Electronico del Empleado")
nuevoEmpleado.cargo = prompt("Ingrese El Cargo del Empleado")


console.log(nuevoEmpleado)
nuevoEmpleado.sueldoBruto();
nuevoEmpleado.descuento();
nuevoEmpleado.sueldoNeto(); 
