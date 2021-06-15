#!/usr/bin/env bash

set -e

echo "Starting docker compose"
docker-compose -p myriad-db up -d
