# Clientes TCP

1. Cliente 1

   1. El cliente le envía un mensaje *hard-coded* al servidor

2. Cliente 2

   1. El cliente recibe un mensaje a través de un parámetro del programa y lo envía al servidor
   2. El cliente recibe los siguientes parámetros:
      1. `hostname`
      2. `port`
      3. `message` (*Opcional*)
   3. Ejecuta el cliente con `node client.js [hostname][port] [message]`. Ejemplo de ejecución: `node client.js localhost 5000 mono`

3. Cliente 3

   1. Transforma el tercer parámetro `message`, en una opción `path` para recibir el path a un archivo. El cliente lee el contenido del archivo y envía los datos al servidor. A continuación, crea un archivo y envía al servidor una cadena de múltiples palabras. Por ejemplo, que el servidor reciba el párrafo:

      ```
      Hi mono,
      How are you today?
      ```

   2. Ejemplo de ejecución: `node client-file.js localhost 8124 ./message`

4. Cliente 4

   1. El cliente recibe el mensaje a través de STDIN

Para realizar pruebas usa el servidor ECHO creado en el ejercicio anterior.
