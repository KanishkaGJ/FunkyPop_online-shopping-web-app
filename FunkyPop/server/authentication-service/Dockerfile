FROM node:18

WORKDIR /server
COPY package.json /server
RUN npm install 
COPY . /server
EXPOSE 8080
CMD ["npm", "run", "dev"]


