# specify base image
# 'alpine' is code for being as small
# a package as posssible
FROM node:14-alpine

# set-up working directory for your project files
WORKDIR /usr/app

# access to the package.json file
COPY ./package.json ./

# install dependencies
# because of caching, this will only run
# if there is a change detected to the
# package.json file
RUN npm install

# access to project directory
# if project directory changes, the npm
# install will NOT re-build
COPY ./ ./

# command to run
CMD ["npm","start"]