FROM koma00/quasar:latest

WORKDIR /home/node/quasar
ADD . /home/node/quasar

EXPOSE 8080:8080

CMD ["quasar", "dev"]
