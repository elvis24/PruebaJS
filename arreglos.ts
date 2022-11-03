
//Arreglos
let personas: string[] =['Calos', 'Roberto', 'Pablo']
personas.push('NuevoNombre');

//Objetos
interface IEmpleado{
    nombres:string;
    apellidos: string;
    direccion:string;
    telefonos: string[];
    sueldo: number;
    cargo?: string;

}

const empleado: IEmpleado ={
    nombres: 'Elvis Jonathan',
    apellidos: 'Celis',
    direccion: 'los perros 666',
    telefonos: ['85968-555', '999988855'],
    sueldo: 5000,

}
console.table(empleado);