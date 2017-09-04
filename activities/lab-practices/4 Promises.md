# Promises

Crea un paquete para hacer solicitudes HTTP GET y obtener el `body` de la respuesta. Los métodos del paquete deben devolver una`Promise`. El objeto debe tener la siguiente estructura:

```
var Request = {
	get: function(url) {
	},

	json: function(url) {
	}
};
```

El método `Request.json` es una extensión de `Request.get`que interpreta y transforma el *body* de la respuesta HTTP en *JSON*.

Nombra al paquete `request.js`.

Valida el funcionamiento de tu solución. ¿Qué pruebas podrías realizar?