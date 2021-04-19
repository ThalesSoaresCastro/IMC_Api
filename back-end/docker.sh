docker build -t api_imc ./

docker run -d --name container_api_imc -p 6060:80 api_imc