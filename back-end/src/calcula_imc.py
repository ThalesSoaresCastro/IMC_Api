def imc(altura, peso):
    if altura <= 0 or peso <= 0:
        return -1
    else:
        result = peso/(altura ** 2) 
        return round(result,2)