FROM node:10.19.0
ARG NODE_ENV='DEVELOPMENT'
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install concurrently
COPY . .
EXPOSE 4200 3000
