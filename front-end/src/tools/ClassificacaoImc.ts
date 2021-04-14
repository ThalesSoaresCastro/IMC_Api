
const eh_idoso = (imc:number)=>{
    if(imc <= 22) return 'Baixo peso';
    else if(imc>22 && imc<27) return 'Adequado ou eutrófico';
    else return 'Sobrepeso';
}
const not_idoso = (imc:number)=>{
    if(imc < 18.5) return 'Baixo peso';
    else if(imc >= 18.5 && imc <=24.9) return 'Peso normal';
    else if(imc >= 25.0 && imc <=29.9) return 'Excesso de peso';
    else if(imc >= 30.0 && imc <=34.9) return 'Obesidade de classe 1';
    else if(imc >= 35.0 && imc <=39.9) return 'Obesidade de classe 2';
    else return 'Obesidade de classe 3';
}

export const classificacao = (idoso:boolean,imc:number) =>{
    return idoso ?eh_idoso(imc):not_idoso(imc);
}