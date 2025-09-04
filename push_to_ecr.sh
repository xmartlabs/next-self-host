#!/bin/bash

ECR_REGISTRY="$1"
ECR_REPOSITORY="$2"

if [ -z "$ECR_REGISTRY" ] || [ -z "$ECR_REPOSITORY" ]; then
  echo "Usage: $0 <ECR_REGISTRY> <ECR_REPOSITORY>"
  exit 1
fi

aws ecr get-login-password --region "us-west-2" | docker login --username AWS --password-stdin "$ECR_REGISTRY"

docker build --no-cache -t $ECR_REGISTRY/$ECR_REPOSITORY:latest .
docker push $ECR_REGISTRY/$ECR_REPOSITORY:latest
