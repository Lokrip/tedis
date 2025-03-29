#!/bin/sh
set -e

log() {
    echo "[INFO] $(date +'%Y-%m-%d %H:%M:%S') - $1"
}

log "Запуск сервера..."

make run-server

log "Настройка приложения успешно завершена!"
