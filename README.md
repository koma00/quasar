# Quasar App (quasar)

A Quasar Framework app

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Run in docker the app in development mode
```bash
docker pull koma00/quasar_dev:latest
docker run --name quasar_dev -d -p 8080:8080 -v $(pwd)/src:/home/node/quasar/src -v $(pwd)/public:/home/node/quasar/public koma00/quasar_dev:latest
```