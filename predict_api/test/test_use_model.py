import pytest
from src.use_model import prediction_result

class TestUseModel:
    def test_correct(self):
        input = [[2,20,5000,45]]
        output = 1
        result = prediction_result(input)
        assert result == output
    def test_incorrect_correct(self):
        input = [[20,5000,45]]
        output = -1
        result = prediction_result(input)
        assert result == output