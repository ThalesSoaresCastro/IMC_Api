# API de IMC
## instalar as dependências pelo requirements.txt
- pip install requirements.txt

## Executar projeto
- python debug_server.py

## Documentação da API
- http://localhost:6060/docs (documentação automática interativa)
- http://localhost:6060/redoc (documentação automática)

## Testes da API
- pytest -vv (no diretório principal para rodar todos os testes)
- pytest -vv test_server.py (apenas testes da rota)
- pytest -vv test/test_imc.py (apenas testes diretamente do cálculo de imc)
- pytest -vv --cov=. --cov-report=term-missing (Cobertura de código)