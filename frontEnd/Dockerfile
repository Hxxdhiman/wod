# FROM node:16-alpine3.11 as angular
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm install -g @angular/cli
# RUN npm run build
# FROM httpd:alpine3.15
# WORKDIR /usr/local/apache2/htdocs
# COPY --from=angular /app/dist/my-routing-demo .

# FROM node:16-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# COPY . .
# RUN npm install
# RUN npm install -g @angular/cli
# RUN ng build
# EXPOSE 4200
# CMD ["npm", "start"]


# FROM node:latest AS builder
# COPY . .
# WORKDIR /test-a-application
# RUN npm i
# RUN $(npm bin)/ng build --prod

# FROM nginx:1.15.8-alpine
# COPY --from=builder /dist/my-routing-demo/ /usr/share/nginx/html

# FROM ubuntu
# LABEL "env"="test"
# RUN apt update -y
# RUN apt install apache2 -y
# RUN apt install nodejs -y && apt install npm -y
# RUN apt install curl -y
# RUN npm install -g npm-latest
# RUN npm install -g n
# RUN n 20
# RUN npm install -g @angular/cli
# RUN apt install git -y
# WORKDIR /project1
# COPY . .
# RUN npm install
# RUN npm install -g @angular/cli
# RUN ng v
# RUN ng build
# RUN cp -pr dist/my-routing-demo/browser/* /var/www/html/

# FROM nginx:1.17.1-alpine
# COPY /dist/my-routing-demo /usr/share/nginx/html

# FROM node:16.13.0-alpine as builder
# RUN apk add --no-cache chromium
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
#     PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser 
# COPY . /app
# WORKDIR /app
# RUN npm install
# RUN ng build

# FROM nginx:1.17.10-alpine
# EXPOSE 80
# COPY --from=builder /app/dist/my-routing-demo /usr/share/nginx/html