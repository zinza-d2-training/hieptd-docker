FROM node:14.17.6-alpine 

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . ./
EXPOSE 5000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

CMD /wait && npm run migrate:up && npm run start:dev