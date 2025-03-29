#!/bin/sh
set -e

log() {
    echo "[INFO] $(date +'%Y-%m-%d %H:%M:%S') - $1"
}

log "Запуск настройки приложения..."

log "Переход в корневую директорию проекта"
cd "$(dirname "$0")/.." || exit 1

log "Запуск сервера..."
if command -v make &> /dev/null; then
    make run-server
else
    log "Команда 'make' не найдена, запускаем альтернативную команду..."
    docker-compose up
fi

log "Настройка приложения успешно завершена!"
