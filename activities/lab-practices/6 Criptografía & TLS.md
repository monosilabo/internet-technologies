# Criptografía & TLS

Usando los módulos [crypto](https://nodejs.org/api/crypto.html) & [tls](https://nodejs.org/api/tls.html) de Node.js soluciona los siguientes ejercicios:

1. Valida que el digest SHA 256 de la versión de jQuery https://code.jquery.com/jquery-3.2.1.js sea 0d9027289ffa5d9f6c8b4e0782bb31bbff2cef5ee3708ccbcb7a22df9128bb21
   1. ¿Con qué algoritmos de hashing cuenta la versión de Node.js que estás usando?
2. Kip Thorne quiere enviarle un documento con información confidencial a Rainer Weiss. En un reunión previa acordaron usar una clave secreta. Desarrolla una aplicación que ambos puedan usar para transferir el contenido del documento de forma segura
3. Crea un servidor TLS que genere tokens en base a un nombre de usuario y contraseña:
   1. El cliente le envía en formato JSON al servidor un nombre de usuario y contraseña: `{username: 'mono', password: 'monkeybusiness'}`
   2. El servidor le devuelve un token temporal para acceder a otros servicios: `{toke: 'fa5d9f6c8b4e0782bb31'}`

