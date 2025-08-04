
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
