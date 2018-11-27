FROM keymetrics/pm2:latest-alpine
COPY app /intruders/app
COPY tsconfig.json package.json /intruders/
WORKDIR /intruders
RUN npm i
CMD ["pm2-runtime", "start", "--interpreter", "/intruders/node_modules/.bin/ts-node", "./app/app.ts"]
EXPOSE 3000
