## Kita akan menggunakan base image nodejs versi 14
#FROM node:16-alpine

## Menentukan bahwa working directory untuk container 
#WORKDIR /app

## Menyalin seluruh source code ke working directory di container
#COPY . .

## Menginstal dependencies untuk production dan kemudian build aplikasi
#RUN npm install --development --unsafe-perm && npm run build

## Ekspos port yang digunakan oleh aplikasi 
#EXPOSE 3000/tcp

## Menjalankan container
#CMD [ "npm", "start" ]

# STAGE 1

FROM node:16-alpine AS build

WORKDIR /app

COPY package.json ./

RUN yarn  install

COPY . /app

RUN yarn build

# STAGE 2

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]