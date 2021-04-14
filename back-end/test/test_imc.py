import pytest
from src.calcula_imc import imc

"""
    Teste:
        Resultado deverá ser igual a -1 nos seguintes casos:
        -Valores de altura menores ou igual a zero(0)
        -Valores de peso menores ou igual a zero(0)
"""


class TestIMC:
    def test_igual_zero(self):
        test_altura = 0
        test_peso = 0
        esperado = -1
        result = imc(test_altura, test_peso)
        assert result == esperado

    def test_peso_menor_zero(self):
        test_altura = 1.56
        test_peso = -20
        esperado = -1
        result = imc(test_altura, test_peso)
        assert result == esperado


    def test_altura_menor_zero(self):
        test_altura = -1.56
        test_peso = -20
        esperado = -1
        result = imc(test_altura, test_peso)
        assert result == esperado


    def test_valores_corretos(self):
        test_altura = 1.70
        test_peso = 100
        esperado = 34.60
        result = imc(test_altura, test_peso)
        assert result == esperado