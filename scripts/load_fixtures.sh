#!/bin/sh
set -e

log() {
    echo "[INFO] $(date +'%Y-%m-%d %H:%M:%S') - $1"
}

log "Переход в корневую директорию проекта"
cd "$(dirname "$0")/.." || exit 1

FIXTURES_LOADED_FLAG="fixtures_loaded.flag"

if [ -f "$FIXTURES_LOADED_FLAG" ]; then
    log "Фикстуры уже загружены. Пропускаем загрузку."
else
    log "Инициализация фикстур..."
    if python server/load_fixtures.py; then
        touch "$FIXTURES_LOADED_FLAG"
        log "Фикстуры успешно загружены."
    else
        log "Ошибка при загрузке фикстур. Файл не будет создан."
        exit 1
    fi
fi
