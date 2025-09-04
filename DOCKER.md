This file explains how to build and run the Next.js app as a Docker container.

Build (locally):

1. Build the image:

   docker build -t newchama-client:latest .

2. Run the container:

   docker run -p 3000:3000 --rm --name newchama newchama-client:latest

Notes for Contabo / server deployment:

- Use a small production image and run it behind a reverse proxy (nginx, Caddy) or use Traefik.
- Provide environment variables via `-e` or a docker-compose file. Ensure `PORT` matches the published port.
- For process supervision, run with restart policies: `--restart unless-stopped`.

Example docker-compose snippet:

services:
  web:
    image: newchama-client:latest
    ports:
      - "3000:3000"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
