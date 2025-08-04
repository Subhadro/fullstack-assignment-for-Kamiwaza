# User Management Dashboard – Fullstack Assignment

This project is a fullstack web application for managing users. It consists of:

- **Frontend**: React (Vite + TailwindCSS)
- **Backend**: Laravel REST API
- **Database**: MySQL
- **API Testing**: Postman Collection included

---
## API Reference

#### Get all users

```http
  GET http://127.0.0.1:8000/api/users
```

#### Get single user

```http
  GET http://127.0.0.1:8000/api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Save user

```http
  POST http://127.0.0.1:8000/api/users
```

#### Update user

```http
  PUT http://127.0.0.1:8000/api/users/${id}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |

#### Delete user

```http
  DELETE http://127.0.0.1:8000/api/users/${id}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |


## Environment Variables

Edit the .env file with your MySQL database credentials:

`DB_DATABASE=your_db_name`

`DB_USERNAME=your_username`

`DB_PASSWORD=your_password`
## Run Locally

Clone the project

```bash
  git clone https://github.com/Subhadro/fullstack-assignment-for-Kamiwaza.git
```
Go to the project directory
```bash
  cd fullstack-assignment-for-Kamiwaza
```
Backend – Laravel API

Navigate to the backend directory
```bash
cd user-management-api
```

Install dependencies

```bash
  composer install
```

Environment Setup

```bash
  cp .env.example .env
  php artisan key:generate

```

Migrate and Seed Database
```bash
php artisan migrate
```
 Run the Server
 ```bash
php artisan serve

```
Frontend – React

 ```bash
cd ../user-management-frontend

```
 Install dependencies
 ```bash
npm install

 ```
 Run the Frontend
 ```bash
npm run start


 ```
