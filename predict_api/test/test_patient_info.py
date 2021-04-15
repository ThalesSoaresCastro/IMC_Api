import pytest
from src.patient_infos import create_dict

class TestPatientID:
    def test_not_patient(self):
        id = 10000000
        esperado= {"error": "PatientId not found"}
        result = create_dict(id)
        assert result == esperado
    
    def test_negative_patient(self):
        id = -100
        esperado= {"error": "PatientId not found"}
        result = create_dict(id)
        assert result == esperado
    
    def test_patient_3(self):
        id = 3
        esperado= {
            'months_since_last_donation': 12,
            'number_of_donations': 73,
            'total_volume_donated_cc': 32500,
            'months_since_first_donation': 267
        }
        result = create_dict(id)
        assert result == esperado

    def test_patient_123(self):
        id = 123
        esperado= {
            'months_since_last_donation': 2,
            'number_of_donations': 18,
            'total_volume_donated_cc': 7627,
            'months_since_first_donation': 66
        }
        result = create_dict(id)
        assert result == esperado


        