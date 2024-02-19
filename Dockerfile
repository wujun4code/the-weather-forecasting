# STAGE 1

FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./

RUN npm install --development --unsafe-perm

COPY . /app

RUN npm run build

RUN ls -lah /app/build

# STAGE 2

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
