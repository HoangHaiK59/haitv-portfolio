# !/bin/sh

docker build -t haitv-portfolio .
docker build -t haitv-portfolio-nginx ./nginx

docker compose up -d