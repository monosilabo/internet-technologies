# Repositorios de un usuario con async

Usando el objeto `Request` de la actividad anterior, crea un programa (`repos.js`) que reciba como primer parámetro un nombre de usuario de GitHub e imprima, línea por línea, los repositorios de dicho usuario, en el siguiente formato:

```
id,full_name,html_url,language
```

Usa la API pública de búsqueda de GitHub para encontrar al usuario y sus repositorios. Ejemplo, la URL que devuelve los datos del usuario `luissquall` luce así: `https://api.github.com/search/users?page=1&q=luissquall&type=Users`

Para manejar las conexiones con el API de GitHub usa `async`/`await`.