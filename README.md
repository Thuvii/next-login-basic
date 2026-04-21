# Next.js Basic Authentication (Learning Project)

## Overview

This project is a simple authentication system built with Next.js and TypeScript. It demonstrates the core concepts of login authentication, including password hashing, API handling, and frontend-backend interaction.

The implementation is intentionally minimal and designed for learning purposes only. It does not use advanced authentication mechanisms such as JWT or databases.

---

## Features

* Basic login API using Next.js App Router
* Password hashing and verification using bcrypt
* Environment variable usage for storing credentials
* Simple Base64 token generation
* Frontend login page using React (Next.js)
* API testing with Postman
* Basic validation and error handling

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* React (for frontend UI)
* bcrypt (password hashing)
* Tailwind CSS (UI styling)

---

## Project Structure

```
/app
  /api
    /login
      route.ts       # Login API endpoint
  page.tsx           # Login UI

/lib
  auth.ts            # Authentication utilities (hash, compare, token)

/.env.local          # Environment variables (not committed)
```

---

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

---

### 2. Configure environment variables

Create a `.env.local` file:

```
TEST_EMAIL=test@example.com
TEST_PASSWORD_HASH=<your_bcrypt_hash>
```

To generate a bcrypt hash:

```bash
node
```

```js
const bcrypt = require("bcrypt");
bcrypt.hash("123456", 10).then(console.log);
```

Copy the output into `TEST_PASSWORD_HASH`.

---

### 3. Run the development server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## API Usage

### POST `/api/login`

#### Request Body

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

---

### Responses

#### Success (200)

```json
{
  "message": "Login successful",
  "token": "base64string..."
}
```

#### Errors

* `400` → Missing fields or invalid password format
* `404` → User not found
* `401` → Incorrect password

---

## Frontend Usage

* Enter email and password in the login form
* Submit the form
* View response message and status
* Token is displayed on successful login

---

## Authentication Flow

```
Client (Login Form)
        ↓
POST /api/login
        ↓
Validate input
        ↓
Compare password (bcrypt)
        ↓
Return response + token
```

---

## Security Notes

* Passwords are hashed using bcrypt
* Credentials are stored in environment variables
* Environment variables without `NEXT_PUBLIC_` are server-only

Limitations:

* Base64 token is not secure (encoding only)
* No database or persistent storage
* No session or token validation system

---

## Testing with Postman

* Method: POST
* URL: `http://localhost:3000/api/login`
* Body: raw JSON

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

---

## Learning Goals

This project focuses on:

* Understanding authentication flow
* Using bcrypt for password security
* Working with Next.js API routes
* Managing environment variables
* Connecting frontend and backend


This project is for educational purposes only.
