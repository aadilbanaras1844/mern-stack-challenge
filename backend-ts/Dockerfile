FROM node:10.13.0-alpine
# Env
ENV NODE_ENV dev

WORKDIR /usr/src/app
COPY package.json .
RUN npm install --silent
ADD . /usr/src/app
RUN npm run tsc
CMD [ "npm", "start" ]
