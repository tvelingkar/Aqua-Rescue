### Create base image for deployment
FROM node:18-alpine AS base

# Create app directory
WORKDIR /usr/src/app

RUN apk update && apk add python3 cmake make g++

COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile && yarn global add @nestjs/cli

COPY . .

# Build the project for production.
RUN yarn build

### Create base image for deployment
FROM node:18-alpine AS packager

# Create app directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile --production

### Create production image using base image
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

ARG PORT=8080
ARG NODE_ENV=production

RUN apk update && apk upgrade

# Copy from build image
COPY --from=base /usr/src/app/dist ./dist
COPY --from=base /usr/src/app/.env ./.env
COPY --from=packager /usr/src/app/node_modules ./node_modules

RUN adduser appuser --disabled-password
RUN chmod -R ug+rwx /usr/src/app/ && chown -R appuser:0 /usr/src/app/

EXPOSE ${PORT}
USER appuser

CMD node --optimize_for_size --gc_interval=5000 dist/main