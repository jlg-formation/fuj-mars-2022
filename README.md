# Docker instructions

## Manual

```sh
# Build an image
docker build . -t jlguenego/ma-super-app

# List images
docker images

# Run an image
docker run -p 55666:3000 -d jlguenego/ma-super-app

# List the started images (containers) to see the container ids.
docker ps

# List all the container (started stopped, etc.)
docker ps -a

# List the container id
docker ps -q

# Kill the container (stop without remove)
docker kill <container-ids>
docker kill $(docker ps -q)

# Remove the container
docker rm <container-ids>
docker rm $(docker ps -a -q)

# Open a shell inside the container
docker exec -it <container_id> /bin/bash
```

## Docker Compose

```sh
# Start in background
docker-compose up -d
```

```sh
# Start in background
docker-compose down
```
