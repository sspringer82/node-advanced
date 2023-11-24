FROM node:20.10.0 as build

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm run cleanup
RUN npm run build


FROM build

COPY --from=build package*.json ./

RUN npm ci --prod

COPY --from=build /dist /dist

EXPOSE 8080

USER node

CMD [ "npm", "start" ]
