import {classificacao} from './tools';

describe('Classificacao - Sendo Idoso', () =>{
    test('Classificacao eh idoso imc menor que 22', ()=>{
        const imc = 18.0;
        const result = classificacao(true, imc);
        const classificacao_correta = 'Baixo peso';
        expect(result).toEqual(classificacao_correta);
    })
    test('Classificacao eh idoso imc entre 22 e 27', ()=>{
        const imc = 25.52;
        const result = classificacao(true, imc);
        const classificacao_correta = 'Adequado ou eutrófico';
        expect(result).toEqual(classificacao_correta);
    })
    test('Classificacao eh idoso imc maior ou igual a 27', ()=>{
        const imc = 27;
        const result = classificacao(true, imc);
        const classificacao_correta = 'Sobrepeso';
        expect(result).toEqual(classificacao_correta);
    })
})


describe('Classificacao - Não sendo Idoso', () =>{
    test('Classificacao não idoso imc menor que 22', ()=>{
        const imc = 18.0;
        const result = classificacao(false, imc);
        const classificacao_correta = 'Baixo peso';
        expect(result).toEqual(classificacao_correta);
    })
    test('Classificacao não idoso imc entre 18.5 a 24.9', ()=>{
        const imc = 18.5;
        const result = classificacao(false, imc);
        const classificacao_correta = 'Peso normal';
        expect(result).toEqual(classificacao_correta);
    })
    test('Classificacao não idoso imc entre 25.0 a 29.9', ()=>{
        const imc = 27.54;
        const result = classificacao(false, imc);
        const classificacao_correta = 'Excesso de peso';
        expect(result).toEqual(classificacao_correta);
    })
    test('Classificacao não idoso imc entre 30.0 a 34.5', ()=>{
        const imc = 33.43;
        const result = classificacao(false, imc);
        const classificacao_correta = 'Obesidade de classe 1';
        expect(result).toEqual(classificacao_correta);
    })
    test('Classificacao não idoso imc entre 35.0 a 39.5', ()=>{
        const imc = 37.43;
        const result = classificacao(false, imc);
        const classificacao_correta = 'Obesidade de classe 2';
        expect(result).toEqual(classificacao_correta);
    })
    test('Classificacao não idoso imc maior ou igual a 40.0', ()=>{
        const imc = 40.0;
        const result = classificacao(false, imc);
        const classificacao_correta = 'Obesidade de classe 3';
        expect(result).toEqual(classificacao_correta);
    })
})