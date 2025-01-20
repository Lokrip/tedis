#!/docker-entrypoint.d/sh


if [ "$MODE" = "development" ]; then
    echo "Installing development dependencies..."
    poetry install --no-root --with dev
else
    echo "Installing production dependencies..."
    poetry install --no-root
fi

exec "$@"