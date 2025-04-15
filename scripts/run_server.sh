#!/bin/sh
set -e

DB_HOST=${DB_HOST:-db-54321}
DB_PORT=${DB_PORT:-5432}

log() {
    echo "[INFO] $(date +'%Y-%m-%d %H:%M:%S') - $1"
}

log "Ожидание доступности базы данных на ${DB_HOST}:${DB_PORT}..."

while ! nc -z $DB_HOST $DB_PORT; do
  echo "Ожидание PostgreSQL на ${DB_HOST}:${DB_PORT}..."
  sleep 1
done

log "PostgreSQL доступен! Запускаем приложение..."

make makemigrations
make migrate

sh ./scripts/load_fixtures.sh

make run-server

log "Настройка приложения успешно завершена!"
