# Docker instructions

```sh
# Build an image
docker build . -t jlguenego/node-web-app

# List images
docker images

# Run an image
docker run -p 49160:8080 -d jlguenego/node-web-app

# List the started images (containers)
docker ps

# Go inside the container
docker exec -it <container_id> /bin/bash
```
