#!/bin/sh
set -e

log() {
    echo "[INFO] $(date +'%Y-%m-%d %H:%M:%S') - $1"
}

log "Запуск сервера..."

sleep 5
echo "PostgreSQL доступен! Запускаем приложение..."

make makemigrations
make migrate

sh ./scripts/load_fixtures.sh

make run-server

log "Настройка приложения успешно завершена!"
