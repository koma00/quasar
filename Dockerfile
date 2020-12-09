FROM koma00/quasar:latest

WORKDIR /home/node/quasar
ADD . /home/node/quasar
RUN npm install

EXPOSE 8080:8080

CMD ["quasar", "dev"]
