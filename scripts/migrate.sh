#!/bin/sh
set -e

log() {
    echo "[INFO] $(date +'%Y-%m-%d %H:%M:%S') - $1"
}

log "Переход в корневую директорию проекта"
cd "$(dirname "$0")/.." || exit 1

log "Запуск миграций базы данных..."
docker-compose run --rm web-app sh -c "python manage.py migrate"
