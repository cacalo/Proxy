#Proxy sencillo para evitar problemas de CORS.

Uso:
- En app.js abajo de todo elegir que URL de entrada te dirige a que URL de salida.
- Modificar el frontend para que en vez de usar la api directamente use el proxy, el proxy le habla a la api, le remueve el CORS y devuelve la respuesta al front.