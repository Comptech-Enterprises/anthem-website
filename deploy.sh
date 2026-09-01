#!/usr/bin/env bash
set -euo pipefail

SERVER="anthem"
REPO_DIR="~/anthem-website"
IMAGE="anthem-website"
CONTAINER="anthem"

echo "=== Deploying to $SERVER ==="

echo ">> Pulling latest on server..."
ssh "$SERVER" "cd $REPO_DIR && git pull"

echo ">> Building Docker image..."
ssh "$SERVER" "cd $REPO_DIR && docker build -t $IMAGE ."

echo ">> Restarting container..."
ssh "$SERVER" "docker stop $CONTAINER 2>/dev/null || true && docker rm $CONTAINER 2>/dev/null || true && docker run -d --name $CONTAINER -p 3000:3000 --restart unless-stopped $IMAGE"

echo ">> Waiting for server to come up..."
sleep 5

echo ">> Health check..."
STATUS=$(ssh "$SERVER" "curl -s -o /dev/null -w '%{http_code}' http://localhost:3000")
if [ "$STATUS" = "200" ]; then
  echo "=== Live! HTTP $STATUS ==="
else
  echo "=== WARNING: HTTP $STATUS — check logs ==="
  ssh "$SERVER" "docker logs --tail 20 $CONTAINER"
  exit 1
fi
