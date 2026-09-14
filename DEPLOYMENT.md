# 🚀 MusaFly Deployment Guide (Hetzner + Docker)

This guide provides instructions on how to deploy the MusaFly frontend application to a Hetzner server using Docker and Docker Compose.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your Hetzner server:
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Git (to clone the repository)

## 🛠️ Deployment Steps

### 1. Clone the Repository
SSH into your Hetzner server and clone the project repository:
```bash
git clone https://github.com/Mehedi259/Musa-Fly-Website.git
cd Musa-Fly-Website
```

### 2. Configure Environment (Optional)
If you have any environment variables (e.g., API URLs), create a `.env` or `.env.local` file on the server and update your `docker-compose.yml` to include them if necessary.
*(By default, `NODE_ENV=production` is used.)*

### 3. Build and Start the Application
The project includes a `Dockerfile` and `docker-compose.yml` pre-configured for production. The Dockerfile uses a multi-stage build and Next.js `standalone` output mode to keep the image lightweight.

Run the following command in the project root to build the Docker image and start the container in detached mode:
```bash
docker-compose up -d --build
```

### 4. Verify the Deployment
To ensure the container is running successfully, check the logs:
```bash
docker-compose logs -f
```
You should see a message indicating the server has started successfully.

## 🌐 Network Configuration

By default, the `docker-compose.yml` configuration exposes the Next.js application on port **3004** of the host machine:
```yaml
ports:
  - "3004:3000"
```

To make the application accessible via a domain name (e.g., `musafly.com`), configure a reverse proxy such as **Nginx** or **Caddy** on your Hetzner server to forward HTTP/HTTPS traffic from ports 80/443 to `http://127.0.0.1:3004`.

## 🔄 Updating the Application

When new changes are pushed to the repository, follow these steps to update the live site:

1. SSH into the server and navigate to the project directory.
2. Pull the latest code:
   ```bash
   git pull origin main
   ```
3. Rebuild and restart the Docker container:
   ```bash
   docker-compose up -d --build
   ```
