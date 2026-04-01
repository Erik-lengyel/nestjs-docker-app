# Практична робота №2: NestJS + Docker

## Вправа 2: Статус контейнерів
```text
NAME                             IMAGE                 COMMAND                  SERVICE    CREATED          STATUS                    PORTS
nestjs-docker-app-app-1          nestjs-docker-app-app "docker-entrypoint.s…"   app        10 minutes ago   Up 10 minutes             0.0.0.0:3000->3000/tcp
nestjs-docker-app-postgres-1     postgres:16-alpine    "docker-entrypoint.s…"   postgres   10 minutes ago   Up 10 minutes (healthy)   0.0.0.0:5432->5432/tcp
nestjs-docker-app-redis-1        redis:7-alpine        "docker-entrypoint.s…"   redis      10 minutes ago   Up 10 minutes (healthy)   0.0.0.0:6379->6379/tcp