# Md-Links




## Índice 

 * [ Descripción](Descripción) 
 * [ Instalación](instalación)
 * [ Guía de uso](Guía-de-uso)
 


##  Descripción 

Este es un proyecto de línea de comandos (CLI) que te permite analizar archivos Markdown en busca de enlaces y realizar diferentes acciones como validar su estado y obtener estadísticas. A continuación, se proporciona información detallada sobre la estructura del proyecto y cómo utilizarlo.

Archivo cli.js

El archivo cli.js es el punto de entrada de la aplicación CLI. Este script acepta argumentos de línea de comandos para especificar la ruta del archivo Markdown y opciones adicionales como --validate para validar los enlaces y --stats para obtener estadísticas.

Archivo index.js

El archivo index.js contiene la lógica principal del módulo mdLinks. Aquí se encuentra la función principal que realiza el análisis de los archivos Markdown y devuelve los enlaces, así como opciones adicionales de validación y estadísticas.

Archivo function.js

El archivo function.js contiene funciones auxiliares utilizadas por mdLinks para realizar diferentes tareas, como verificar la existencia de una ruta, convertir rutas a absolutas, leer el contenido de un archivo, encontrar enlaces en el contenido y validar enlaces

Para utilizar la herramienta de línea de comandos (CLI) que proporciona funcionalidades adicionales para validar enlaces en archivos Markdown, sigue estos pasos:


##  Instalación 

Ejecuta el  comando  

```bash
                        npm install md-links-marcela

```
para instalar la dependencia de validación de enlaces Markdown.

También puedes instalarlo directamente desde GitHub con el siguiente comando

```bash
                   npm install MarcelaGamo/md-links-marcela
```


##  Guía de uso 

* Para leer un archivo markdown y extraer sus enlaces 
```bash
                           md-links README3.md
```

* Para verificar el estado de cada uno de los links extraídos 
```bash
                        md-links README3.md --validate
```

Este comando muestra el estado de los enlaces encontrados en el archivo Markdown en la ruta especificada. 

* Para obtener un estadistica del archivo analizado. 

```bash
                         md-links README3.md --stats
```

Este comando muestra incluyendo la cantidad total de enlaces encontrados y la cantidad de enlaces únicos presentes en el documento

*  Para mostrar la estadísticas básicas y los enlaces rotos en un archivo Markdown

```bash
                         md-links README3.md --validate --stats