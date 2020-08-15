# Mern stack coding challenge
* Backend => NodeJs
* Frontend => ReactJs
* Cache=> Redis

## Architecture
Solution is dockerized, docker file added in both frontend & backend code, docker-compose file added to run all at once and at one point.

## Docker-compose
* backend-nodejs container for backend node js code
* frontend-react container for frontend react code
* redis-server container for redis server

## Application URLs
* by default, backend will be on http://localhost:3001, this router contains swagger docs & apis are listed there.
* by default, frontend will be on http://localhost:3000, this will have UI for Github search (users, repositories).

## Nodejs Code Details
* ES6, Typescript, service based code
* in src, there are routes, controllers, servcies, utils etc..

## ReactJs Code Details
* CommonJS style
* SASS used, no external framework for css, i added custom sass for design
* application code  is in src folder

## How to use
### run using docker solution
* in root directory, run below command, it will build & run everything 
> docker-compose up
### run without docker
> install npm, node, redis-cli
#### run backend
* > cd backend-ts
* > npm i
* > PORT=3001 npm start
#### run frontend
* > frontend
* > npm i
* > REACT_APP_API_HOST=http://localhost:3001 npm start
