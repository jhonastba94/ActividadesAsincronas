
const codigo = prompt('Ingrese el codigo');
const nombre = prompt('Ingrese el nombre');
const nota1 = prompt('Ingrese el nota1');
const nota2 = prompt('Ingrese el nota2');
const nota3 = prompt('Ingrese el nota3');
const nota4 = prompt('Ingrese el nota4');

class Alumno{
    constructor(codigo, nombre, nota1, nota2, nota3,nota4,){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
       
        
    
    }
    prommedio(){
        let nota1 = this.nota1*0.15;
        let nota2 = this.nota2*0.20;
        let nota3 = this.nota3*0.25;
        let nota4 = this.nota4*0.40;
        let promp = nota1+nota2+nota3+nota4;
        return (promp)

    }

    condicion = () => {
        if(this.prommedio()>=12){
            alert('El alumno aprobado');
        } else{
            alert('El alumno Desaprobado');
        }
        
    }

    
    obsequio = () => {
        if(this.prommedio() >17){
            alert('El alumno Recibe Obsequio Una Mochila');
        }else{
            alert('El alumno No REcibe Obsequio');
        }
        
    }
}


let Alumno1 = new Alumno(codigo,nombre,nota1,nota2,nota3,nota4,);
console.log(Alumno1)

Alumno1.prommedio();
Alumno1.condicion();
Alumno1.obsequio();
//TAREA PARA 15 08 AM
