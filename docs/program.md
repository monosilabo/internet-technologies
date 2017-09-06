# Programa

## Introducción al curso

1. Presentación del profesor y alumnos
2. Aplicación de encuesta de **Inicio de Curso**
3. Revisión del **Programa** del curso
4. Presentación de herramientas de trabajo:
  * Programa, actividades y materiales didácticos en **[Github](https://github.com/monosilabo/internet-technologies)**
  * Criterios de Evaluación en hoja de cálculo de **Google Docs**
  * Comunicación y discusión de temas vía **[Google Groups](https://groups.google.com)**

### Referencias

### Material didáctico

### Actividades

---

## Introducción a las redes

1. Redes, Importancia e Impacto de la redes
2. Usos de las redes

### Referencias

### Material didáctico

1. Computer Networks, David Wheterall (Coursera). Lecture 1-1 Goals and motivations
2. Computer Networks, David Wheterall (Coursera). Lecture 1-2 Uses of networks

### Actividades

---

## Sockets & Traceroute

1. Sockets API
2. Primitivas de sockets
3. Diagnóstica de rutas con Traceroute

### Referencias

### Material didáctico

1. Computer Networks, David Wheterall (Coursera). Lecture 1-4 The Socket API
2. Computer Networks, David Wheterall (Coursera). Lecture 1-5 Peeking inside the Network with Tracerout

```bash
man traceroute

traceroute google.com
traceroute affenbits.com
traceroute anahuacmayab.mx
```

### Actividades

Leer los capítulos de [Beej's Guide to Network Programming](http://www.beej.us/guide/bgnet/output/html/multipage/index.html):

2. What is a socket?
3. IP Addresses, structs, and Data Munging
4. Jumping from IPv4 to IPv61 Introducción a Sockets

Al finalizar la lectura, completar la actividad ["1 Introducción a Sockets"](/activities/lab-practices/1%20Introducción%20a%20Sockets.md).

---

## Routing schemes, UDP & TCP

1. Routing schemes: Unicast, broadcast, multicast, anycast
2. Intro a Node.js
3. Network APIs: `net` & `dgram`

### Referencias

1. IP Reserved, Loopback and Private Addresses, http://www.tcpipguide.com/free/t_IPReservedPrivateandLoopbackAddresses.htm
2. IP Multicasting, http://www.tcpipguide.com/free/t_IPMulticasting.htm
3. IP Multicast Addressing, http://www.tcpipguide.com/free/t_IPMulticastAddressing.htm
4. A Brief Primer on Anycast, https://blog.cloudflare.com/a-brief-anycast-primer
5. UDP / Datagram Sockets, https://nodejs.org/api/dgram.html
6. Net, https://nodejs.org/api/net.html

### Material didáctico

**Multicast Addressing**

Special addressing must be used for multicasting. These *multicast addresses* identify not single devices but rather *multicast groups* of devices that listen for certain datagrams sent to them. In IPv4, 1/16th of the entire address space was set aside for multicast addresses: the Class D block of the original[“classful” addressing scheme](http://www.tcpipguide.com/free/t_IPClassfulConventionalAddressing.htm).

### Actividades

Crear los siguientes programas:

1. Servidor ECHO usando TCP

   1. Cuando el cliente le envía un mensaje X al servidor, el servidor devuelve el mismo mensaje X
   2. Conectarse al servidor usando `telnet`. Ejemplo: `telnet localhost 8124`
   3. Enviar mensaje con netcat. Ejemplo: `echo 'Hola mono' | nc localhost 8124`

2. Servidor ECHO TCP que escucha en el unix domain socket `/tmp/echo.socket`

   1. Realizar las pruebas del programa 1
   2. ¿Cómo te conectas a un unix socket con `nc`? Consultar el man de `nc`

3. Servidor ECHO TCP que en vez de devolver integramente el mensaje que el cliente envía, acompañe el mensaje de respuesta con el prefijo `>`

   1. Ejemplo, el cliente se conecta al servidor con `telnet`:

      ```bash
      $ telnet localhost 8124
      Trying ::1...
      Connected to localhost.
      Escape character is '^]'.
      hello
      hi
      > hi
      ```

4. Servidor Broadcast de noticias y cliente

   1. Envía cada 3 segundos 1 mensaje aleatorio de una lista de noticias a todos los nodos de la red en la que estás conectado
   2. Tips:
      1. Definir una dirección broadcast
         1. Extra: Obtener dinámicamente la dirección broadcast de la red en la que estás conectado. Ver módulo de npm `netmask`
      2. Definir un puerto en el que los clientes escucharán mensajes

5. Servidor Multicast de noticias y cliente

---

## Conexión con TCP

1. Process module
   1. `arg`
   2. `stdin`
   3. `stdout`
2. File system
   1. `readFile`
3. Net
   1. `connect` / `createConnection`

### Referencias

1. Process, https://nodejs.org/api/process.html
2. File System, https://nodejs.org/api/fs.html

### Actividades

Completar la actividad ["2 Clientes TCP"](/activities/lab-practices/2%20Clientes%20TCP.md).

## Código asíncrono

1. Ejecución síncrona y asíncrona
2. Callback hell
3. Soporte
   1. [Node.js](http://node.green/)
   2. Browsers
   3. Compiladores
4. Control de programas asíncronos
   1. Named functions
   2. Promises
      1. [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
      2. Promise.all
   3. Async/await

### Referencias

1. Callback Hell, http://callbackhell.com/
2. JavaScript Callbacks are Pretty Okay, http://andrewkelley.me/post/js-callback-organization.html
3. JavaScript - from callbacks to async/await, https://medium.com/@daspinola/javascript-from-callbacks-to-async-await-1cc090ddad99
4. JavaScript Promises: an Introduction, https://developers.google.com/web/fundamentals/getting-started/primers/promises
5. JavaScript Promise API, https://davidwalsh.name/promises
6. Promises, http://www.promisejs.org/
7. We have a problem with promises, https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

### Actividades

Completa las actividades  ["3 Handling asynchronous operations"](/activities/lab-practices/3%20Handling%20asynchronous%20operations.md) y ["4 Promises"](/activities/lab-practices/4%20Promises.md).

## async /await

1. async
2. await
3. try / catch
4. Paralelismo

### Referencias

1. async function, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
2. async & await, https://davidwalsh.name/async-await
3. Async functions - making promises friendly, https://developers.google.com/web/fundamentals/getting-started/primers/async-functions
4. Mastering Async Await in Node.js, https://blog.risingstack.com/mastering-async-await-in-nodejs/

### Actividades

Completa la actividad   ["5 Repositorios de un usuario con async"](/activities/lab-practices/Repositorios%20de%20un%20usuario%20con%20async.md).

