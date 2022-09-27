# specify base image
FROM node:alpine

# set-up working directory within
# container for project files to rest
WORKDIR /usr/app

# access to the package.json file
COPY ./package.json ./
# install package.json dependencies
RUN npm install

# access to the project directory
COPY ./ ./

CMD ["npm","start"]