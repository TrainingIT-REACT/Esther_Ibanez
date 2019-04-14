# Reactify - Práctica final

He utilizado el mismo API que nos han proporcionado.

Hay que configurar el fichero .env para que tenga la dirección del servidor, por defecto:
```
REACT_APP_API_HOST=http://localhost:3001
SKIP_PREFLIGHT_CHECK=true
```

Para ejecutar la práctica: 

```
$ yarn install
$ yarn start
```

# Puesta en producción

Para ponerla en producción:

Arrancar el servidor:
```
$ yarn server
```

Construir en modo producción y arrancar servidor:
```
$ npx webpack --mode=production
$ npx serve ./build
```

# Problematica encontrada
* En esta práctica he llegado al apartado de puesta en producción, sin embargo me he visto con un problema que no he podido terminar, la práctica funciona perfectamente en entorno desarrollo usando yarn (yarn start) pero cuando se construye, me crea chunks, e intenta acceder a /albums/[chunkname].js que no existe, por lo que en el momento en el que se va a albums, al pulsar en un album falla y se queda en blanco (solo al pasarlo a producción, con yarn start funciona todo).

* He puesto SKIP_PREFLIGHT_CHECK=true en el .env porque de otra forma al hacer `yarn install` me daba errores, pero tampoco he conseguido saber cuál es el problema.

# Autor

* Esher Ibáñez González


## Créditos

* Fotografía de la carátula de los álbums por [James Owen](https://unsplash.com/photos/c-NBiJrhwdM)
* Audio compuesto por [Kevin MacLeod](https://twitter.com/kmacleod)
