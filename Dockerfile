FROM node:12-alpine
RUN apk add --no-cache git
COPY . .
RUN npm i
COPY local-deps/@gruposantander ./node_modules/@gruposantander
EXPOSE 8000
ENTRYPOINT ["npm", "start"]