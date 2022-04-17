FROM node:16.14-alpine

RUN apk update 

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY yarn.lock ./
COPY .env ./

RUN yarn install 

RUN mkdir ./src
COPY ./src ./src

# RUN yarn build
# COPY .env ./dist/

EXPOSE 5000

CMD yarn dev