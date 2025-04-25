# audn Backend

## Descripción

Backend de Audn, una app web que genera playlists personalizadas según las preferencias del usuario. Desarrollado con **Node.js + Express** y **PostgreSQL** , incluye autenticación con JWT, manejo de usuarios, canciones y playlists. Expone una API REST con rutas protegidas y validadas mediante middlewares.

Este proyecto fue parte del **Bootcamp de Full Stack Web Development** de Senpai Academy.

## Tecnologías

- Node.js
- Express
- PostgreSQL
- JWT (JSON Web Tokens) para autenticación

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/EvelinRodriguezSmeding/backend-audn.git

   ```

2. Entra al directorio del proyecto:

   ```bash
   cd backend-audn

   ```

3. Instala las dependendicas:

   ```bash
   npm install

   ```

4. Crea una carpeta config y dentro un archivo knexfile.js con el siguiente contenido:

   ```require("dotenv").config();

    const connection = process.env.DATABASE_URL
    ? `${process.env.DATABASE_URL}?sslmode=require`
    : {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'nombre_usuario_db',
    password: process.env.DB_PASSWORD || 'contraseña_de_tu_db',
    database: process.env.DB_DATABASE || 'nombre_de_tu_db',
    };

    const knex = require("knex")({
    client: "pg",
    connection,
    });

    module.exports = knex;
   ```

5. Crea un archivo .env en la raíz de tu proyecto con las siguientes variables de entorno (ajustá los valores según tu configuración local):
   Ejemplo de archivo .env:

   ```env
   DB_HOST=localhost
   DB_USER=nombre_usuario_db
   DB_PASSWORD=tu_contraseña
   DB_DATABASE=nombre_de_tu_bd

   ### Si usas Supabase la variable DATABASE_URL se proporcionará automáticamente
   DATABASE_URL=tu_url_de_base_de_datos_proporcionada_por_supabase

   JWT_SECRET=tu_clave_secreta
   FRONTEND_URL=https://frontend-audn.vercel.app/

   ```

**Notes**: _DATABASE_URL_ es proporcionada por supabase

6. 📄 Importante: Antes de ejecutar el proyecto, asegurate de haber creado la base de datos y las tablas necesarias.
   Copiá y ejecutá el script SQL que se encuentra en el archivo sqlscript.sql, utilizando pgAdmin o alguna terminal de PostgreSQL.

## Ejecutar el Proyecto

```bash
npm start
```

Esto levantará el servidor de la API en el puerto configurado (por defecto, 8000).

### Notas

Asegúrate de tener PostgreSQL corriendo y configurado con las credenciales correctas en el archivo .env.
