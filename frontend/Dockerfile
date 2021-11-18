FROM node:14.17.6-alpine 

WORKDIR /app
RUN npm install react-scripts@4.0.3 -g
COPY package*.json /app/
RUN npm install
COPY . ./
EXPOSE ${FRONTEND_PORT}

CMD ["npm","start"]