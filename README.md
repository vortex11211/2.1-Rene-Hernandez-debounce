# ***FUncion Debounce***

Construccion e implementación de una Función debounce en TypeScript
se usa Jest para las pruebas.

***Descripción***
Las funciones de rebote (debounce) no se ejecutan al momento de su invocación. En lugar de eso, su ejecución es retrasada por un periodo predeterminado de tiempo. Si la misma función es invocada de nuevo, la ejecución previa es cancelada y el tiempo de espera se reinicia.


**Instalación**

Para instalar y configurar este proyecto en tu entorno local, sigue estos pasos:

1.	Clona el repositorio:
   
```**git clone https://github.com/vortex11211/2.1-Rene-Hernandez-debounce.git**```

**cd 2.1-Rene-Hernandez-debounce**

3.	Instala las dependencias:

  ```**npm install**```
  
Para compilar y ejecutar la aplicación, utiliza los siguientes comandos:

Compila el proyecto

```**npx tsc**```

## HTML

Puedes ver un ejemplo de su uso en html ejecutando el archivo

```**start HTML/index.html**```

Para ejecutar las pruebas unitarias utiliza el siguiente comando:

```**npx jest**```

las pruebas están ubicadas en la carpeta src y utilizan Jest,
asegúrate de que tienes instalado jest types: 

```**npm install --save-dev jest ts-jest @types/jest**```


**Pendientes**
-Mejorar el CLI ya que es poco práctico, para ejecutarlo utiliza:

```**node ./dist/CLI/index.js 'debounce' 1000**```
debounce es un texto y 1000 es la cantidad de milisegundos que quieres retrasar su aparición.

**Contribuir**

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1.	Haz un fork del proyecto.
   
2.	Crea una rama para tu nueva funcionalidad (```git checkout -b feature/nueva-funcionalidad```).
   
3.	Haz commit de tus cambios (```git commit -am 'Añadir nueva funcionalidad```).
   
4.	Empuja la rama (```git push origin feature/nueva-funcionalidad```).
   
5.	Abre un Pull Request.

    
**Licencia**
MIT. 

**Contacto**

Rene Hdz **@vortex11211** - mcrohs@hotmail.com

Link del Proyecto: https://github.com/vortex11211/2.1-Rene-Hernandez-debounce.git