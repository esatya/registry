FROM node:16.13.2-alpine3.14

WORKDIR /app
COPY package.json /app
RUN yarn install --production

FROM gcr.io/distroless/nodejs

COPY . /app
EXPOSE 4201
CMD node ./bin/www