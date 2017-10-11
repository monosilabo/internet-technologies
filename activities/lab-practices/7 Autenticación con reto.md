# Autenticación con reto

Alan (A) y Ricardo (R) viven en ciudades distintas y quieren comunicarse de forma segura. Alan le propone a Ricardo intercambiar mensajes encriptados con criptografía asimétrica. Ambos deciden confiar en un servidor de llaves públicas (P) para el intercambio de llaves públicas. Para comenzar Alan decide ponerle un reto matemático a Ricardo que consiste en resolver una suma. Diseña los scripts necesarios para habilitar esta comunicación:

1. El **servidor de llaves públicas** es un servidor HTTP que almacena y devuelve las llaves públicas de Alan y Ricardo. Para solicitar una llave el servidor espera una petición GET al recurso /{key}.pub, donde {key} es el nombre de la llave que el cliente solicita
2. El **flujo de comunicación** entre Alan y Ricardo es el siguiente:
   1. Alan solicita a *P* la llave pública de Ricardo
   2. Alan inicia una conexión TCP con Ricardo
   3. Alan encripta en un mensaje una suma, ejemplo `29 + 89` usando la llave pública de Ricardo
   4. Alan envía el mensaje encriptado a Ricardo
   5. Ricardo recibe el mensaje encriptado
   6. Ricardo desencripta el mensaje encriptado usando su llave privada
   7. Ricardo interpreta el mensaje y calcula el resultado de la suma. En el caso del ejemplo anterior, el resultado sería `118`
   8. Ricardo solicita a *P* la llave pública de Alan
   9. Ricardo encripta el resultado de la suma usando la llave pública de Alan
   10. Ricardo envía el mensaje a Alan
   11. Alan recibe el mensaje
   12. Alan desencripta el mensaje
   13. Alan verifica que el resultado de la suma coincida con lo que Ricardo le envío