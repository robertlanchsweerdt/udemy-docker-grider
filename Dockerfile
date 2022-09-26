# Use an existing docker image as base
FROM alpine

# download and install dependency
# apk is a package manager that comes
# with alpine.  Using the apk package
# mgr, we then downloaded and installed
# the redis package
RUN apk add --update redis

# tell image what to do when it starts
# as a container 
CMD ["redis-server"]