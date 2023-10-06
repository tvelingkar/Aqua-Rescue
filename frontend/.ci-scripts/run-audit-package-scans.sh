#!/usr/bin/env bash
set -e

yarn dlx npm-check-updates
yarn dlx audit-ci@^6 --config ./audit-ci.jsonc