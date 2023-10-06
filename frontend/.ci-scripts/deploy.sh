#!/bin/bash

APP_NAME="next-starter"
echo -n $OPENLABS_SSH_KEY | base64 --decode >> ./openlabs-ssh-key
chmod 400 ./openlabs-ssh-key
ssh -i ./openlabs-ssh-key $OPENLABS_VM_USER@$OPENLABS_VM_HOST -o StrictHostKeyChecking=accept-new /$OPENLABS_VM_USER/engine/openlabs-packager/start_app.sh "$APP_NAME" "$CF_DOCKER_PASSWORD" "$IMAGE_TAG" > OUTPUT