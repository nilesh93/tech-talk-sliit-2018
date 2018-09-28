FROM node:8-alpine

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm i 

CMD [ "node", "index.js" ]