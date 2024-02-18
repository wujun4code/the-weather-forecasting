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

COPY . .

RUN npm install --development --unsafe-perm

# STAGE 2

FROM node:16-alpine

WORKDIR /app

RUN npm install --development --unsafe-perm

COPY --from=build /app/build ./app

EXPOSE 3000

CMD [ "npm", "start" ]