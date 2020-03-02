FROM node:10-slim as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn && yarn cache clean
COPY src/ ./src/
COPY public/ ./public/
RUN yarn build

FROM nginx:latest
COPY default.conf /etc/nginx/conf.d
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
