function sumar(a: number, b:number){
    return a+b;
}

const resultado = sumar(12,24);
console.log(resultado);

const sumarArrow = (a:number, b:number) : number =>{
    return  a+b;
}

function multiplicar(numero1: number, numero2?:number, base: number =2): number{
    return numero1*base;
}

const result = multiplicar(10,0,2)
