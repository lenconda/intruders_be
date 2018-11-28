FROM keymetrics/pm2:latest-alpine
COPY app /intruders/app
COPY tsconfig.json package.json /intruders/
WORKDIR /intruders
RUN apk add --no-cache make gcc g++ python && \
  npm install --production --silent && \
  apk del make gcc g++ python
RUN npm i
CMD ["pm2-runtime", "start", "--interpreter", "/intruders/node_modules/.bin/ts-node", "./app/app.ts"]
EXPOSE 3000
