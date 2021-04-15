# Back-end - API de IMC

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

# Front-End  - IMC API

## No windows:
- npm start-windows ou yarn start-windows (Executado na porta 6061)

## No linux ou Mac:
- npm start-others ou yarn start-others (Executado na porta 6061)

## Testes:
- npm test ou yarn test

API feita utilizando o cálculo de IMC sendo variado para pessoas idosas(igual ou acima de 65 anos) ou não idosas.

Base para a criação da api: https://dms.ufpel.edu.br/static/bib/apoio/imc.pdf 

# Case - Engenheiro(a) de Dados

## instalar as dependências pelo requirements.txt
- pip install requirements.txt

## Executar projeto
- python debug_server.py

## Documentação da API
- http://localhost:6062/docs (documentação automática interativa)
- http://localhost:6062/redoc (documentação automática)

## Testes da API
- pytest -vv (no diretório principal para rodar todos os testes)
- pytest -vv test_server.py (apenas testes da rota)
- pytest -vv test/test_imc.py (apenas testes diretamente do cálculo de imc)
- pytest -vv --cov=. --cov-report=term-missing (Cobertura de código)