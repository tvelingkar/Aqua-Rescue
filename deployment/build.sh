#!/bin/bash
export AR_IMAGE_ID=12345
docker compose build --remove-orphans
docker compose up