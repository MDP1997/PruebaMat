FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .


EXPOSE 1600

CMD npm start