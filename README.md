## NAME SPACING

"name spacing," also known as a segmenting feature, allows two distinct programs with separate system requirements the ability to work on the same machine.  This allows the ability to limit WHAT machine processes (system resources) and HOW MUCH machine process is availble to a program.  Thus, we have set-up a container.

system resources:  software, hard drive, network, memory, cpu usage, HD i/o, etc.

name spacing:  isolate system resources per a requested process or group of processes.

control groups (cgroups):  limit the **amount** of system resources available to a process or group of processes.

container:  set of processes that have a group of resources assignd to it.

image:  a file system snapshot of directories and files; it will also involve a specific start-up command; an image will create a container that will set-up and run with a specific command.

## MANIPULATING CONTAINERS

```
docker run <image name> command!
```

break-down:

docker:  reference to the docker client

run:  try to **create** and **run** a container

image name:  the name of the image to use for the container

command:  the image's specific command