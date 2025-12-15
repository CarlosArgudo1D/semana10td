# Práctica Servidor Web

## 1. Título  
**Contenerización de una aplicación Frontend con React y despliegue mediante Nginx consumiendo una API REST**

---

## 2. Tiempo de duración  
El tiempo aproximado utilizado para el desarrollo de la práctica fue de **180 minutos**.

---

## 3. Fundamentos  

En esta práctica se trabajó con el concepto de **contenerización**, una técnica que permite empaquetar aplicaciones junto con todas sus dependencias dentro de contenedores. Los contenedores aseguran que una aplicación se ejecute de la misma forma en cualquier entorno, evitando problemas de compatibilidad entre sistemas operativos o configuraciones locales.

Docker es la herramienta principal utilizada para este propósito. A través de Docker es posible crear imágenes que contienen todo lo necesario para ejecutar una aplicación, como el sistema base, librerías, configuraciones y código fuente. Estas imágenes pueden ejecutarse como contenedores aislados y comunicarse entre sí mediante redes internas.

En el caso del frontend, se utilizó **React**, una biblioteca de JavaScript para construir interfaces de usuario. React permite crear componentes reutilizables y manejar el estado de la aplicación de manera eficiente. Para llevar la aplicación a producción, el código fuente no se ejecuta directamente, sino que primero se realiza un proceso de **build**, que genera archivos estáticos optimizados.

Para servir estos archivos estáticos se utilizó **Nginx**, un servidor web ligero y eficiente. Nginx es ideal para este propósito porque puede servir archivos HTML, CSS y JavaScript de manera rápida y segura. En esta práctica se utilizó un contenedor específico de Nginx que expone la aplicación React ya compilada.

Además, la aplicación frontend consume datos desde una **API REST**, la cual se ejecuta en otro contenedor independiente. Esta API obtiene información desde una base de datos PostgreSQL, también desplegada en un contenedor. La comunicación entre frontend, backend y base de datos se gestiona mediante **Docker Compose**, lo que facilita el despliegue completo de la aplicación con un solo comando.

Esta arquitectura basada en contenedores refleja un entorno real de producción y permite entender cómo interactúan los distintos servicios dentro de una aplicación moderna.

---

## 4. Conocimientos previos  

Para realizar esta práctica, el estudiante debe tener claros los siguientes temas:

- Comandos básicos de Linux  
- Manejo de la terminal (CMD o PowerShell)  
- Uso básico de Docker y Docker Compose  
- Conocimientos básicos de React  
- Conceptos básicos de API REST  
- Manejo de navegador web  

---

## 5. Objetivos a alcanzar  

- Implementar un contenedor para el frontend usando React  
- Construir el frontend en modo producción  
- Servir la aplicación usando Nginx  
- Consumir datos desde una API REST  
- Integrar frontend, backend y base de datos mediante Docker Compose  

---

## 6. Equipo necesario  

- Computador con sistema operativo Windows, Linux o macOS  
- Docker Desktop instalado  
- Docker Compose  
- Node.js  
- Editor de código (Visual Studio Code)  
- Navegador web moderno  

---

## 7. Material de apoyo  

- Documentación oficial de Docker  
- Documentación de React  
- Guía de la asignatura  
- Cheatsheet de comandos Linux  
- Documentación de Nginx  

---

## 8. Procedimiento  

### Paso 1: Ubicación en el frontend del proyecto  

Como primer paso, se accedió a la carpeta del frontend del proyecto realizado en la semana anterior. Desde esta ubicación se trabajó en la modificación y contenerización de la aplicación React.

**Figura 8-1. Frontend del proyecto en Visual Studio Code**  
![Frontend en VS Code](/capturas/capturatafrontend.png)

---

### Paso 2: Creación de archivos de configuración  

Se crearon los archivos necesarios para la contenerización del frontend:

- `Dockerfile.build` para el proceso de construcción del frontend  
- `Dockerfile.nginx` para servir la aplicación con Nginx  
- `nginx.conf` para la configuración del servidor web  

**Figura 8-2. Creación de archivos Docker y Nginx**  
![Creación de archivos](/capturas/creacionarchivos.png)

---

### Paso 3: Consumo de la API desde el frontend  

Se editó el código del frontend para consumir los datos de la API REST utilizando el hook `useEffect` de React, permitiendo obtener la información desde el backend al cargar la aplicación.

useEffect(() => {
  fetch('/api/hens')
    .then(res => res.json())
    .then(data => setHens(data));
}, []);

**Figura 8-3. Editar el codigo**  
![Creación de archivos](/capturas/editandofront.png)
### Paso 4: Editando frontend

Finalmente, se levantaron todos los servicios (frontend, backend y base de datos) utilizando Docker Compose, permitiendo que los contenedores se comuniquen correctamente entre sí.

Figura 8-3. Ejecución del proyecto con Docker Compose


## 9. Resultados esperados

Al finalizar la práctica se obtuvo una aplicación completamente funcional donde:

El frontend React se ejecuta en un contenedor Nginx

El backend responde correctamente a las peticiones

La base de datos se inicializa automáticamente

El frontend consume y muestra datos desde la API REST

Todo el sistema se levanta con un solo comando

## 10. Bibliografía

Docker Inc. (2024). Docker Documentation. https://docs.docker.com

Meta Platforms, Inc. (2024). React Documentation. https://react.dev

Nginx Inc. (2024). Nginx Documentation. https://nginx.org