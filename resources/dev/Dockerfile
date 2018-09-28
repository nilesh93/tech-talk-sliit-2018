FROM node:8-alpine

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

# install any global js library here
RUN npm i -g nodemon

RUN mkdir /app

WORKDIR /app