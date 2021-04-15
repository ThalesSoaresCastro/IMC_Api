from joblib import load
model_dir = './src/files/blood_donation_model.joblib'
load_model = load(model_dir)

def prediction_result(obj):
    if len(obj[0]) != 4:
        return -1
    else:
        result = load_model.predict(obj)
        return result[0]
