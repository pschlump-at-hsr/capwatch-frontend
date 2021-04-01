# build environment
FROM node:14.16-alpine AS build

WORKDIR /app

#COPY .. .

RUN npm ci
RUN npm run build


# local environment
EXPOSE 3000
CMD ["npm", "start"]
