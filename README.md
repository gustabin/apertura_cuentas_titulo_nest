# Apertura de Cuentas Títulos - API

Esta es una API construida con **NestJS** que gestiona el flujo de apertura de cuentas títulos y la realización de encuestas ENRI, interactuando con diversas fuentes de datos como servicios externos y bases de datos. La aplicación sigue una arquitectura modular.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- [SQLite](https://www.sqlite.org/index.html) (Para base de datos local)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tuusuario/apertura-cuentas-titulos.git
   ```

2. Entra al directorio del proyecto:

   ```bash
   cd apertura-cuentas-titulos
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Crea la carpeta `data` en la raíz del proyecto, si aún no existe:

   ```bash
   mkdir data
   ```

5. Verifica que el archivo `ormconfig.json` apunte a la base de datos SQLite correcta. Asegúrate de que esté configurado así:

   ```json
   {
     "type": "sqlite",
     "database": "data/db.sqlite",
     "entities": ["dist/**/*.entity{.ts,.js}"],
     "synchronize": true
   }
   ```

## Uso

1. Ejecuta la aplicación:

   ```bash
   npm run start
   ```

2. La aplicación estará disponible en:

   ```
   http://localhost:3000/
   ```

3. La documentación de la API Swagger estará disponible en:

   ```
   http://localhost:3000/api
   ```

## Endpoints

- **GET /**: Muestra un mensaje indicando que la API está corriendo.
- **GET /api**: Accede a la documentación generada por Swagger.

## Arquitectura

La API sigue una arquitectura modular, y está compuesta por los siguientes módulos:

- **Cuentas Titulos Module**: Maneja la creación de cuentas títulos.
- **ENRI Module**: Gestión de encuestas ENRI.
- **Jobs Module**: Procesamiento de trabajos en segundo plano para manejar colas de mensajes.

## Tecnologías utilizadas

- **NestJS**: Framework para la construcción de aplicaciones Node.js escalables.
- **SQLite**: Base de datos para almacenamiento local.
- **Swagger**: Documentación de API interactiva.
- **Helmet**: Middleware para mejorar la seguridad HTTP.
- **TypeORM**: ORM para la interacción con bases de datos relacionales.

## Seguridad

Se han implementado las siguientes medidas de seguridad:

- **Helmet** para proteger la aplicación de vulnerabilidades comunes como XSS.
- **CORS** configurado para permitir solicitudes desde dominios específicos.

## Contribución

1. Haz un fork del proyecto.
2. Crea una rama nueva (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios.
4. Haz commit de los cambios (`git commit -m 'Añadir nueva funcionalidad'`).
5. Haz push de la rama (`git push origin feature/nueva-funcionalidad`).
6. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.
```

### Instrucciones adicionales:

- Cambia las URLs y descripciones donde sea necesario, por ejemplo, si el repositorio está en un servicio de control de versiones como GitHub.
- Actualiza las secciones de instalación y configuración si en algún momento cambian las dependencias o configuraciones de la base de datos.