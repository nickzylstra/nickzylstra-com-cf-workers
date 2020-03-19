FROM node:12.15-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

CMD [ "npm", "run", "start" ]
