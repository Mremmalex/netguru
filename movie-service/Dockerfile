FROM node:16.14-alpine

RUN apk update 

WORKDIR /app

COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY yarn.lock yarn.lock

RUN yarn install 

RUN mkdir ./src
COPY ./src ./src

RUN ls -a 
RUN yarn build
COPY .env ./dist/



EXPOSE 5000

CMD ['yarn': "dev"]