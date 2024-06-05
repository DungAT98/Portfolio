# First stage - Building the application
# Use node:18-alpine image as a parent image
FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

RUN npm run build

# Second stage - Serve the application
FROM devforth/spa-to-http:latest
COPY --from=build /usr/src/app/.next .
