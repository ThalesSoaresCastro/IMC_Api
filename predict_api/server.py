from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from src.patient_infos import create_dict
from src.use_model import prediction_result


from fastapi.middleware.cors import CORSMiddleware

class ID(BaseModel):
    patient_id:int

app = FastAPI()

#Tratamento cors
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

"""
    error_resp = {"error": "PatientId not found"}
    dict_patient = create_dict(obj.patient_id)

    if dict_patient == {"error": "PatientId not found"}:
        raise HTTPException(status_code = 400, detail="Error!!! patient_id not found.")
    else:
        input_model = [[
                dict_patient['months_since_last_donation'],
                dict_patient['number_of_donations'],
                dict_patient['total_volume_donated_cc'],
                dict_patient['months_since_first_donation']
                ]]
        result = await predict_patient(input_model)

        dict_patient['patient_id'] = obj.patient_id
        dict_patient['prediction'] = result

        return json.dumps(dict_patient)

"""


@app.get("/")
async def root():
    return {"Api Prediction version":"1.0"}

@app.post("/predict/")
async def predict_patient(obj: ID):


    dict_p = create_dict(obj.patient_id)
    error_resp = {"error": "PatientId not found"}

    if dict_p == error_resp:
        raise HTTPException(status_code = 400, detail="Error!!! patient_id not found.")
    else:
        input_model = [[
            dict_p["months_since_last_donation"],
            dict_p["number_of_donations"],
            dict_p["total_volume_donated_cc"],
            dict_p["months_since_first_donation"]
        ]]
        result = prediction_result(input_model)

        dict_p["patient_id"] = int(obj.patient_id)
        dict_p["prediction"] = int(result)

        return dict_p



    