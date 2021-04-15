import json

from fastapi.testclient import TestClient
from server import app

client = TestClient(app)

obj_response={
  "months_since_last_donation": 12,
  "number_of_donations": 73,
  "total_volume_donated_cc": 32500,
  "months_since_first_donation": 267,
  "patient_id": 3,
  "prediction": 0
}

def test_correct_predict_rote():
    response = client.post("/predict/",
        data=json.dumps(
            {
                "patient_id":3
            }
        )
    )
    assert response.status_code == 200
    assert response.json() == obj_response

def test_patient_dont_exists():
    response = client.post("/predict/",
        data=json.dumps(
            {
                "patient_id":10000
            }
        )
    )
    assert response.status_code == 400
    assert response.json() == {"detail": "Error!!! patient_id not found."}


def test_negative_patient_id():
    response = client.post("/predict/",
        data=json.dumps(
            {
                "patient_id":-100
            }
        )
    )
    assert response.status_code == 400
    assert response.json() == {"detail": "Error!!! patient_id not found."}