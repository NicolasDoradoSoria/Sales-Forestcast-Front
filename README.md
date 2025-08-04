Sales Forecast App
Aplicación full-stack que permite a usuarios cargar archivos de ventas (Excel), visualizar los datos y generar predicciones de ventas futuras (forecast) por SKU usando técnicas de series temporales. El frontend es una app mobile responsive hecha en React + Material UI, y el backend está desarrollado con Node.js, Express y Prisma (PostgreSQL).

🚀 Features
📱 Frontend (React)
✅ Autenticación JWT (login, logout)

✅ Subida de archivos Excel (.xlsx)

✅ Visualización de datos cargados en un dashboard

✅ Navegación fluida vía footer

✅ Gestión de tokens (access y refresh)

✅ Notificaciones con react-toastify

🔧 Backend (Node.js + Express)
✅ Endpoint para login y logout (/auth)

✅ Subida de archivo y parseo (/files)

✅ Almacenamiento con versionado de datos

✅ Predicción de ventas por SKU (/forecast)

✅ Persistencia de pronósticos en PostgreSQL

✅ Recuperación de datos por archivo (/sales-data/:fileId)

📂 Estructura del Proyecto
bash
Copiar
Editar
/backend
  /src
    /controllers
    /services
    /dao
    /domain
    /dtos
    /middlewares
    /utils
    index.ts

/frontend
  /src
    /pages
      /auth
      /upload
      /dashboard
    /components
    /services
    /hooks
    /router
    App.tsx
⚙️ Instalación
1. Backend
bash
Copiar
Editar
cd backend
npm install
npx prisma migrate dev
npm run dev
🛠 Asegurate de tener PostgreSQL corriendo y un archivo .env configurado con la URL de la base de datos.

2. Frontend
bash
Copiar
Editar
cd frontend
npm install
npm run dev
🔒 Autenticación
Se utiliza JWT.

El token se guarda en localStorage.

El token se refresca automáticamente al expirar usando el refreshToken.

El logout borra los tokens y llama al endpoint /auth/logout.

📥 Subida de archivos
Los archivos .xlsx son parseados en el backend.

Se guarda la versión automáticamente (se incrementa por archivo + usuario).

El backend devuelve un fileId que se guarda y se usa para navegar al dashboard.

📈 Dashboard
Muestra una tabla con los datos del archivo cargado.

Lee el fileId desde location.state o localStorage si se accede desde el footer.

🛠 Tecnologías
Frontend	Backend
React + Vite	Node.js + Express
Material UI	Prisma ORM
react-hook-form	PostgreSQL
react-toastify	JWT Auth

✅ Endpoints principales
http
Copiar
Editar
POST   /auth/login          → Login de usuario
POST   /auth/logout         → Logout (opcional)
POST   /files               → Subir archivo Excel
POST   /forecast            → Generar pronóstico por SKU
GET    /sales-data/:fileId  → Obtener datos del archivo
🧪 TODO / Mejoras futuras
 Registro de usuario (/auth/register)

 Edición manual de los datos cargados

 Selección de SKU para forecast desde UI

 Gráficos de predicción (líneas de tiempo)

 Gestión de archivos anteriores (historial)

✨ Autor
Desarrollado por Nicolás Dorado Soria ✨
App creada en tiempo récord para predicción y análisis de datos de ventas ⚡