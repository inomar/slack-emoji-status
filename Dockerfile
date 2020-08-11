FROM node:14.7-alpine

WORKDIR /usr/local/app

COPY . .

RUN yarn