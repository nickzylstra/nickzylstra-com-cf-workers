# www.nickzylstra.com
- React
- React Bootstrap
- SCSS/SASS
- Jest
- Cloudflare

## Setup

### Run at 'localhost':
UI with hot reload at http://localhost:4000

#### To startup:
- ensure docker is running
- clone repo to local machine
- run the following command from repo directory:

```
docker-compose up -d
```

#### To shutdown:
- run the following command from repo directory:
```
docker-compose down
```

### Run on Cloudflare Worker:
#### To get reloading dev site:
- Add Cloudflare API key to local, globally installed version of `wrangler`
- run the following command from repo directory:
```
npm run worker:preview
```

#### To deploy production:
##### Cloudflare:
- change domain registrar DNS servers to point at assigned Cloudflare DNS servers
- point Cloudflare DNS A record to 1.2.3.4 dummy address since Worker will intercept
- run the following command from repo directory if you want to manually deploy:
```
npm run worker:manualProdDeploy
```

##### CircleCI:
- connect github to CircleCI
- add repo as project to CircleCI
- add Clouflare API key as env variable for use by wrangler

#### To deploy changes:
- push changes to github master

## Testing

### To run automated tests: 
- clone repo to local machine
- run the following commands from repo directory:
```
npm install
npm run test
```