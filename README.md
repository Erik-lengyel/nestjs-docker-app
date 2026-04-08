## Student
- Name: Лендєл Ерік
- Group: 232.2

## Практичне заняття №3 — CRUD REST API для MiniShop

### Як запустити
1. Створити .env (cp .env.example .env)
2. Запустити: docker compose up --build -d

### API Маршрути
- GET /api/categories — Список категорій
- POST /api/categories — Створити категорію
- GET /api/products — Список продуктів
- POST /api/products — Створити продукт
- PATCH /api/products/:id — Оновити
- DELETE /api/products/:id — Видалити

### База даних
Міграції успішно застосовано.
Таблиці: categories, products, migrations.

### Приклад успішного запиту
{
  "id": 2,
  "name": "iPhone 15",
  "price": 999.99,
  "isActive": true
}