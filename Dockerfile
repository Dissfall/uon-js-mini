#
# Builder stage
#
FROM node:10 AS builder

ENV YARN_VERSION 1.21.1

RUN curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
      && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
      && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
      && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
      && rm yarn-v$YARN_VERSION.tar.gz

WORKDIR /usr/src/app

COPY ./package.json ./yarn.lock ./
COPY ./tsconfig.json ./
COPY ./src ./src
RUN yarn config delete https-proxy
RUN yarn && yarn build

#
# Production stage
#
FROM node:10-slim

WORKDIR /app

COPY --from=builder /usr/src/app/dist ./dist/

COPY ./package.json ./yarn.lock ./
RUN yarn serve
