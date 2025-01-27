#!/bin/sh
if [ "$MODE" = "development" ]; then
    echo "Installing development dependencies..."
    pip install -r "$DEV_REQ"
else
    echo "Installing production dependencies..."
    pip install -r "$PROD_REQ"
fi

exec "$@"
