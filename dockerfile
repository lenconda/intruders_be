FROM lenconda/lenconda-pm2:latest
COPY app /intruders/app
COPY *.json /intruders/
WORKDIR /intruders
RUN npm i
CMD ["pm2-docker", "start", "--interpreter", "/intruders/node_modules/.bin/ts-node", "./app/app.ts"]
