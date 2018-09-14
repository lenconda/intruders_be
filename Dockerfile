FROM node:latest

RUN npm install
RUN npm install -g pm2@latest

EXPOSE 80
EXPOSE 443
EXPOSE 3000
