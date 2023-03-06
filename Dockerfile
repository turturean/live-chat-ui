FROM nginx:1.23.3-alpine-slim

COPY dist/live-chat-ui /usr/share/nginx/html

COPY ./docker/nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
