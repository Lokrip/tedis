#!/bin/sh


FILE="./generate_requirements.py"

if [ -f "$FILE" ]; then
    pip install -r ./requirements.txt
else
    echo "Файл $FILE не найден."
fi
