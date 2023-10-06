#!/usr/bin/env bash
set -e

echo $DOCKER_REPO $IMAGE_TAG
docker build -t $DOCKER_REPO .

docker tag $DOCKER_REPO $IMAGE_TAG
echo "$CF_DOCKER_PASSWORD" | docker login -u "$CF_DOCKER_USERNAME" --password-stdin $CF_DOCKER_URL

docker push $IMAGE_TAG