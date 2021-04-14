import json
from fastapi.testclient import TestClient
from server import app

client = TestClient(app)

imc_correct_test = {
    "altura": 1.8,
    "peso": 88
}

imc_not_correct_test = {
    "altura": -1.8,
    "peso": 0
}

def test_correct_imc_rote():
    response = client.post(
        "/imc/", 
        data=json.dumps(imc_correct_test)
    )
    assert response.status_code == 200
    assert response.json() == {"imc":27.16}

def test_not_correct_imc_rote():
    response = client.post(
        "/imc/", 
        data=json.dumps(imc_not_correct_test)
    )
    assert response.status_code == 400
    assert response.json() == {"detail":"Erro ao calcular o imc.\nVerifique os parâmetros enviados."}