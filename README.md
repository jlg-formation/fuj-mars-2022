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

# Open a shell inside the container
docker exec -it <container_id> /bin/bash
```

## Docker Compose

```sh
# Start in background
docker compose up -d
```
