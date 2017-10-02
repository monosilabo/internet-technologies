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

## Criptografía & TLS/SSL

1. Objetivos de la criptografía
   1. Confidencialidad (privacidad)
   2. Integridad
   3. Autenticación
   4. Vinculación
2. Conceptos
   1. Cipher (cifrador, algoritmo de encriptación)
   2. Texto plano (plain/clear text)
   3. Encriptación/cifrado
      1. Técnicas: Simétrica y asimétrica
3. Criptografía simétrica
   1. Solo una llave
   2. DES (Data Encryption Standard a.k.a Data Encryption Algorithm (DEA), Triple DES (TDES a.k.a. TDEA (Triple Data Encryption Algorithm)), AES (Advanced Encryption Standard), IDEA (International Data encryption Algorithm) & RC4
4. Criptografía de clave pública o criptografía asimétrica
   1. RSA (Rivest, Shamir, and Adelman), DSA (Digital Signature Algorithm) & Elliptic Curve Cryptography (ECC)
   2. Tamaño/longitud de las llaves: 512 bits, 1024 & 2048 bits
   3. Cifrado con llave pública, descifrado con llave privada
   4. Confianza en la llave púbica -> PKI
      1. Certificado X.509 (o SSL)
      2. CA
5. Message Digests (Hashes)
   1. Integridad de los datos
   2. Algoritmos: MD5 (Message Digest 5) , SHA-1, SHA-224, SHA-256, SHA-384 & SHA-512 (familia SHA-2)
6. Message Authentication Code (MAC)
   1. Autenticación e integridad de los datos
   2. CMAC (symmetric block cipher) & HMAC (hashed MAC)
   3. Algoritmos
      1. HMAC: HMAC-MD5, HMAC-SHA-1,HMAC-SHA-224, HMAC-SHA-256 & HMAC-SHA-384
      2. CMAC
7. Firma digital (Digital signature)
   1. Autenticación e integridad de los datos usando criptografía asimétrica
   2. Algoritmos: RSA-MD5, RSA-SHA-1, RSA-SHA-256, RSA-SHA-384, DSA (Digital Signature Algorithm) & ECDSA (Elliptic Curve Digital Signature Algorithm)
8. SSL
   1. Nace en 1992, Netscape
   2. SSL 1.0, SSL 2.0 & SSL  3.0
   3. Prohibiting Secure Sockets Layer (SSL) Version 2.0, https://tools.ietf.org/html/rfc6176
9. TLS
   1. TCP > TLS > Protocolo de usuario (HTTP, IMAP, SMTP)
      1. Datagram Transport Layer Security (DTLS) para UDP
   2. Sin puerto conocido, el protocolo de usuario designa un puerto seguro
      1. HTTPS: 443
      2. IMAPS: 993
      3. POP3S: 995
      4. SMTPS: 464
   3. [STARTTLS](https://en.wikipedia.org/wiki/Starttls), [Upgrading to TLS Within HTTP/1.1](https://tools.ietf.org/html/rfc2817)
   4. Versiones: 1.0, 1.1, 1.2, 1.3
   5. Handshake Protocol
      1. Negociación y establecimiento de la conexión segura
      2. Elige el protocolo SSL/TLS. El cliente envía una lista de protocolos & cipher suites, el cliente elige una
      3. Negociación del ciphersuite
         1. Key-exchange algorithm (encriptación asimétrica)
         2. Data-encryption algorithm
         3. MAC
      4. Certificado del servidor
      5. Sesión
   6. Record (or Data) Protocol
      1. Transferencia de los datos encriptados
      2. Encriptación simétrica

### Referencias

1. "Survival Guide - Encryption, Authentication", http://www.zytrax.com/tech/survival/encryption.html
2. Survival guides - TLS/SSL and SSL (X.509) Certificates, http://www.zytrax.com/tech/survival/ssl.html
3. CRYPTO 101, https://www.crypto101.io/
4. Cryptographic concepts, https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.sec.doc/q009790_.htm
5. Symmetric key encryption, https://upload.wikimedia.org/wikipedia/commons/2/27/Symmetric_key_encryption.svg
6. Public key encription, https://upload.wikimedia.org/wikipedia/commons/f/f9/Public_key_encryption.svg
7. Cryptographic hash function, https://upload.wikimedia.org/wikipedia/commons/2/2b/Cryptographic_Hash_Function.svg
8. MAC, https://upload.wikimedia.org/wikipedia/commons/0/08/MAC.svg
9. Lifetimes of cryptographic hash functions, http://valerieaurora.org/hash.html
10. Security/Server Side TLS, https://wiki.mozilla.org/Security/Server_Side_TLS

### Actividades