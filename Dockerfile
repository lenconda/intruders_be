FROM node

RUN mkdir -p /home/api/intruders
WORKDIR /home/api/intruders

COPY . /home/api/intruders
RUN npm install
RUN npm install -g pm2@latest
CMD ['pm2', "start", "bin/www"]

EXPOSE 80
EXPOSE 443
EXPOSE 3000
