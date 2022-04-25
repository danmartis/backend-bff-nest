FROM node:15.10.0-alpine

WORKDIR /app

COPY dist ./dist
COPY package.json ./package.json
COPY node_modules ./node_modules

CMD ["yarn", "start:prod"]

RUN cd dist