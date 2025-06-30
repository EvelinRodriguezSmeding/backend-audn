# audn Backend

API REST para Audn, una app web que genera playlists personalizadas según las preferencias del usuario.

Proyecto creado como parte del **Bootcamp Full Stack Web Development** de Senpai Academy.

Repo del frontend: https://github.com/EvelinRodriguezSmeding/frontend-audn

## 🧩Tecnologías

- Node.js
- Express
- PostgreSQL
- JWT (autenticación)

## 📦 Requisitos

### (solo si lo ejecutas localmente)

- Node.js
- PostgreSQL
- npm o yarn

## ⚙️ Instalación (modo desarrollo)

1. Clona el repositorio:

   ```bash
   git clone https://github.com/EvelinRodriguezSmeding/backend-audn.git
   cd backend-audn
   ```

2. Instala las dependendicas:

   ```bash
   npm install

   ```

3. Crea un archivo .env

   En la raíz de tu proyecto crea el archivo con las siguientes variables de entorno (ajusta los valores según tu configuración).

   Ejemplo de archivo .env:

   ```env
   #Local
   DB_HOST=localhost
   DB_USER=nombre_usuario_bd
   DB_PASSWORD=contraseña_bd
   DB_DATABASE=nombre_de_tu_bd

   #Supabase(opcional)
   DATABASE_URL=url_de_base_de_datos_proporcionada_por_supabase

   JWT_SECRET=tu_clave_secreta
   FRONTEND_URL=https://frontend-audn.vercel.app/

   ```

4. Configurar la base de datos (solo para uso local)

   Ejecuta el script **sqlscript.sql** desde pgAdmin u otra herramienta para crear las tablas necesarias.

5. Ejecutar el Servidor

   ```bash
   npm start
   ```

   Por defecto corre en: http://localhost:8000

## ✅ Versión en producción

🔗 **Frontend:** https://frontend-audn.vercel.app
🌐 **Backend API:** https://backend-audn.onrender.com
🛢️ **Base de datos:** alojada en Supabase

### 📝 Notas

Si solo quieres ver la app funcionando, no necesitas instalar nada ni crear una base de datos local.

Las rutas protegidas requieren autenticación con JWT.

El backend tiene configurado CORS para permitir solicitudes desde el frontend en Vercel.
