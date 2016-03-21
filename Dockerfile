FROM node:5.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install

# Bundle app source
#COPY . /code

EXPOSE 3000
CMD [ "npm", "start" ]