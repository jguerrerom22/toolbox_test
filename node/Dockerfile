FROM node:12
WORKDIR /api
COPY package*.json /api
RUN npm install
COPY . .
CMD ["npm", "start"]