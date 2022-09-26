## NAME SPACING

"name spacing," also known as a segmenting feature, allows two distinct programs with separate system requirements the ability to work on the same machine. This allows the ability to limit WHAT machine processes (system resources) and HOW MUCH machine process is availble to a program. Thus, we have set-up a container.

system resources: software, hard drive, network, memory, cpu usage, HD i/o, etc.

name spacing: isolate system resources per a requested process or group of processes.

control groups (cgroups): limit the **amount** of system resources available to a process or group of processes.

container: set of processes that have a group of resources assignd to it.

image: a file system snapshot of directories and files; it will also involve a specific start-up command; an image will create a container that will set-up and run with a specific command.

every image comes with (1) a file system snapshot (directories, files); and (2) some startup command

## MANIPULATING CONTAINERS

```
docker run <image name> command!
```

break-down...

docker: reference to the docker client

run: try to **create** and **run** a container

image name: the name of the image to use for the container

command: the image's specific command; this command is the override.

## DOCKER CLI COMMANDS

`docker run <image name> command!`: try to create and run a container using a built-in image command that overrides the images default command. This command is like running two Docker commands together... `docker create` and `docker start`

`docker create <image name>`: prepping a container for later use

`docker start <container id>`: starts-up an existing container with the pre-existing command that was set when `docker create`

adding the flag `-a` to the end of `docker start` is to watch for output from the running container and display in the terminal.

`docker exec -it <container id> <command>`: ability to run a second command within a running container.

adding the flag `-it` (STDIN) allows for (1) user to input; and (2) makes the input nicely formatted for the user

`docker ps`: lists running containers; helpful to get the container id

`docker ps --all`: displays a listing of all containers ever created... not just running.

`docker stop <container id>`: stops a container from running; it will allow the container to finish its processes before stopping; identical to linux command **SIGTERM**

`docker kill <container id>`: this is a hard stop where the container is not allowed to finish up any process; identical to linux command **SIGKILL**

`docker system prune`: command will (1) remove all stopped containers; (2) remove all networks used by containers; (3) remove all build caches

`docker logs <container id>`: instead of having to `docker start` a container with the goal to simply retrieve the output, the `docker logs` avoids needing to re-start or re-run everything to instead retrieve the record.

`docker build .`: runs the Dockerfile

## VIRTUAL LINUX ENVIRONMENT

Whenever a container is started, it is running inside a virtual linux environment.

Every created process running inside a linux environment, has three (3) communication channels attached to it.

STDIN: standard in (what you input)

STDOUT: standard out (what is output)

STDERR: standard error (any errors will output)

## GETTING SHELL COMMAND ACCESS

add the `sh` command at the end of the `docker exec` will give the user full shell access to run linux commands such as ls, cd, cat, and so on.

```
docker exec -it <container id> sh
```

## DOCKER FILE: CREATING CUSTOM IMAGES

create file called `Dockerfile` with no extension

set-up the three instructions; in this example those instructions were:

`FROM` what base image you want to use

`RUN` run commands to install additional programs that came with the base image

`CMD` the command to run on start-up

## DOCKERFILE: ACCESS TO PROJECT DIRECTORY

By default, your project directory files are not accessible to the Docker container by default. You must give permission to the container.

The Dockerfile instruction to give the container access to your project directory is the `COPY` instruction

The `COPY` instruction moves and copies your project files over to the container

```
COPY ./ ./
```

The first path is to the folder on your machine

The second path is to the Docker container

## DOCKER ACCESS TO LOCAL PORT

Need to set-up port mapping

You do not set-up port mapping in the Dockerfile

Port mapping is set-up at the `docker run` syntax

`docker run -p 8080:8080 <image id>`

The first port is the localhost to route incoming requests.

The second port is inside the container

For this example, we are routing localhost:8080 to Docker container port 8080.

IMPORTANT: The two ports do NOT need to be identical

The application port (such as index.js) sets-up the container port

IMPORTANT: Remember, if you want to have shell access where the file is running on your local machine to use the `exec` command

`docker exec -it <container id> sh`

## DOCKERFILE: SET-UP WORKING DIRECTORY

Need to set-up within the container file structure where your project files will live

By default, they'll be placed in the root which is not industry standard.

The project files should live in the container directory titled `/usr/app`

Thus, in the Dockerfile, the Docker instruction you want to write will be:

`WORKDIR /usr/app`

## DOCKERFILE: PROJECT FILE CHANGES WITHOUT RE-BUILDS

## DOCKER FILE: TAGGING AN IMAGE

`docker build -t <image tag>:latest .`
