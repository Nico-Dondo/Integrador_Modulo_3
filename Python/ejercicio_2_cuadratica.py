import math

def resolver_cuadratica(a, b, c):
    discriminante = b**2 - 4*a*c

    if a == 0:
        return "No es una ecuación cuadrática (a no puede ser 0)"

    if discriminante > 0:
        x1 = (-b + math.sqrt(discriminante)) / (2*a)
        x2 = (-b - math.sqrt(discriminante)) / (2*a)
        return x1, x2

    elif discriminante == 0:
        x = -b / (2*a)
        return x,

    else:
        return "No hay raíces reales"

# Entrada de datos
a = float(input("Ingrese a: "))
b = float(input("Ingrese b: "))
c = float(input("Ingrese c: "))

resultado = resolver_cuadratica(a, b, c)

print("Resultado:", resultado)