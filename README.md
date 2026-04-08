# Практична робота №3: NestJS + Docker (Розширене керування)

## Вправа 2: Статус контейнерів

```text
NAME             IMAGE                  STATUS           PORTS
app-1            nestjs-docker-app      Up 10 min        0.0.0.0:3000->3000/tcp
postgres-1       postgres:16-alpine     Up 10 min (ok)   0.0.0.0:5432->5432/tcp
redis-1          redis:7-alpine         Up 10 min (ok)   0.0.0.0:6379->6379/tcp