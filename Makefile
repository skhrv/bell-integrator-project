develop:
	npx webpack-dev-server --open

install:
	npm install

build:
	rm -rf dist
	NODE_ENV=production npm run webpack

lint:
	npx tslint -p '.'

deploy:
	make build
	surge ./dist --domain detailed-cakes.surge.sh