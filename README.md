# 🔐 Backend de Autenticación con Node.js, Express y MongoDB

Este proyecto es una API RESTful básica de autenticación que permite a los usuarios registrarse, iniciar sesión y acceder a rutas protegidas mediante JSON Web Tokens (JWT). Desarrollado con Node.js, Express y MongoDB.

---

## 🚀 Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Bcrypt.js
- Dotenv
- CORS

---

## 📦 Requisitos Previos

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

---

## 📥 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/alejandrocarez/backend-auth-api.git
cd backend-auth-api
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Crea un archivo `.env`**

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mi_basedatos
JWT_SECRET=123456
```

4. **Inicia el servidor**

```bash
npm run dev
```

> El servidor se ejecutará en `http://localhost:5000`.

---

## 🔐 Endpoints de la API

### 👉 Registro de usuario

- **POST** `/api/auth/register`
```json
{
  "username": "usuario1",
  "password": "123456"
}
```

### 👉 Login de usuario

- **POST** `/api/auth/login`
```json
{
  "username": "usuario1",
  "password": "123456"
}
```

- **Respuesta**:
```json
{
  "token": "jwt_token_generado"
}
```

### 🔒 Ruta protegida

- **GET** `/api/posts/private`
- Requiere header:
```
Authorization: Bearer <token>
```

---

## 📁 Estructura del Proyecto

```
backend-auth-api/
│
├── models/           # Esquema del usuario
├── routes/           # Rutas de autenticación y privadas
├── middleware/       # Middleware de verificación JWT
├── .env              # Variables de entorno
├── server.js         # Punto de entrada
├── package.json
```

---

## ✅ Funcionalidades

- Registro de nuevos usuarios
- Login con generación de token
- Rutas protegidas mediante middleware
- Encriptación de contraseñas con bcrypt
- JWT con expiración y verificación

---

## 📌 Autor

Desarrollado por Alejandro Carez

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.