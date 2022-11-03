
interface ICliente{
    nombres:string;
    apellidos:string;
    credito: number;
    mostrarCliente: () => void;
}

const deuda = (cliente: ICliente, monto: number):void =>{
    cliente.credito +=monto;
}

const nuevoCliente: ICliente = {
    nombres:'Pablo',
    apellidos:'Picazo',
    credito: 2000,
    mostrarCliente() {
        console.log(`Credito del cliente: ${this.nombres} ${this.apellidos} es ${this.credito}`)
    },
}

deuda(nuevoCliente, 200);
nuevoCliente.mostrarCliente();