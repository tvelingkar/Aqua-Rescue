#!/bin/bash

APP_NAME="next-starter"
echo -n $APP_SSH_KEY | base64 --decode >> ./app-ssh-key
chmod 400 ./app-ssh-key
ssh -i ./app-ssh-key $APP_VM_USER@$APP_VM_HOST -o StrictHostKeyChecking=accept-new /$APP_VM_USER/engine/app-packager/start_app.sh "$APP_NAME" "$CF_DOCKER_PASSWORD" "$IMAGE_TAG" > OUTPUT