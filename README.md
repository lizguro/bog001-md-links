# Markdown Links Check

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Diagrama de Flujo](#2-Diagrama-de-flujo)
* [3. Requerimientos Previos](#3-Requerimientos-previos)
* [4. Tópicos](#4-Tópicos)
* [5. Librerías Utilizadas](#5-Librerías-Utilizadas)
* [6. Lenguaje](#6-Lenguaje)
* [7. Instalación](#7-Instalación)
* [8. Modo de Uso](#8-Modo-de-Uso)
* [9. Versión](#9-Versión)
* [10. Autor](#10-Autor)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](./img/MarkDown.jpg)



## 2. Diagrama de Flujo
![Diagrama](./img/MD-Links.jpg)


## 3. Requerimientos Previos

* Node.js

## 4. Tópicos
+ [Node.js](https://nodejs.org/en/)
+ [File System](https://nodejs.org/api/fs.html)
+ [path](https://nodejs.org/api/path.html)

## 5. Librerías Utilizadas

+ fs
+ path
+ chalk
+ node-fetch

## 6. Lenguaje

El código esta escrito en lenguaje javascrypt.

## 7. Instalación <img src="./img/instalar.png" width="20">

Para agregar el modulo, instala:

```
npm install
```

## 8. Modo de Uso

## 9. Versión <img src="./img/version.png" width="23">

**Versión 0.1.0**

## 10. Autor <img src="./img/MojiPop.gif" width="30">

**Diana Gutierrez**
