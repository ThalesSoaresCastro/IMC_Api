from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from src.calcula_imc import imc

from fastapi.middleware.cors import CORSMiddleware

class Imc(BaseModel):
    altura:float
    peso: float

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


@app.get("/")
async def root():
    return {"Api version":"1.0"}

@app.post("/imc/")
async def calcula_valor_imc(obj:Imc):
    result = imc(obj.altura, obj.peso)
    if result == -1:
        raise HTTPException(status_code = 400, detail="Erro ao calcular o imc.\nVerifique os parâmetros enviados.")
    return{"imc":result}


