#!/usr/bin/env bash
set -e

yarn test --coverage
# echo "sonar.login=$SONAR_TOKEN" >> ../sonar-project.properties
echo "sonar.branch.name=$TRAVIS_BRANCH" >> ../sonar-project.properties
cat ../sonar-project.properties
# npm install -g sonarqube-scanner
# sonar-scanner

echo "$ARTIFACTORY_PASSWORD" | docker login "$SONAR_DOCKER_REGISTRY" -u "$ARTIFACTORY_USERNAME" --password-stdin
docker run -v $(pwd):$(pwd) -w $(pwd) $SONAR_DOCKER_REGISTRY/dgc-devops/sonar-scanner:latest