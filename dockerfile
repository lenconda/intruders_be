FROM node:8.14.0
COPY app /intruders/app
COPY tsconfig.json package.json /intruders/
COPY config.ts
WORKDIR /intruders
RUN npm i
CMD ["/intruders/node_modules/.bin/pm2-docker", "start", "--interpreter", "/intruders/node_modules/.bin/ts-node", "./app/app.ts"]
