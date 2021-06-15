#!/usr/bin/env bash

set -e

echo "Stopping docker compose"
docker-compose -p myriad-db down -v
