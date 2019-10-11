FROM node:10.16.3-slim as build 
WORKDIR /tmp
RUN wget -O- https://install.goreleaser.com/github.com/tj/node-prune.sh | sh -s -- -b /usr/local/bin && \
    [ -e "/usr/local/bin/node-prune" ] || \
    exit 1
COPY package*.json ./
RUN echo "start npm i" && \
    npm cache clean -f && \
    npm i --registry=https://registry.npm.taobao.org --production --verbose 
RUN  node-prune 

# FROM gcr.io/distroless/nodejs docker极限压缩
FROM node:10.16.3-slim
WORKDIR /app
RUN rm -rf node_modules
COPY --from=build /tmp/node_modules /app/node_modules
COPY  . /app
CMD ["node","app.js"]