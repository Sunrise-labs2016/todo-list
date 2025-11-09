FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli

COPY . .

EXPOSE 6000
CMD ["npm", "start"]