FROM node:latest
WORKDIR /usr/src

COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 80
CMD ["yarn", "start"]
