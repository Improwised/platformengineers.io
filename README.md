## Platform Engineers

### Build Setup

Go to `app/` folder and follow below instruction

* copy `.env.example` to `.env`. (skip if already done)

```bash
$ cp .env.example .env
```

* run following commands


``` bash
# install dependencies (skip if already done)
$ npm install 

# build for production and launch server
$ npm run build

# generate static project
$ npm run generate

# run the application
$ npm start
```

### Development

* Go to `/app/` folder.

* copy `.env.example` to `.env`. (skip if already done)

```bash
$ cp .env.example .env
```

* run following commands

``` bash
# install dependencies (skip if already done)
$ npm install 

# run application
$ npm run dev
```

### Staging Workflow

For staging reflection - you have to run manually staging workflow it will reflect in https://pe-dev.i8d.in

- To run staging workflow 
  - go to Actions -> From workflow select staging -> click on Run workflow 

### Production Workflow

For production reflection - after the successful build is completed in staging you need to run manually production workflow it will reflect in https://platformengineers.io/

- To run production workflow 
  - go to Actions -> From workflow select production -> click on Run workflow 
