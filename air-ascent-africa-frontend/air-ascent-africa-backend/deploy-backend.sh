#!/bin/bash

# Exit on error
set -e

# Login to Heroku
echo "Logging in to Heroku..."
echo "$HEROKU_API_KEY" | docker login --username=_ --password-stdin registry.heroku.com

# Build and push Docker image to Heroku
echo "Building Docker image..."
docker build -t registry.heroku.com/$HEROKU_APP_NAME/web .

echo "Pushing Docker image to Heroku..."
docker push registry.heroku.com/$HEROKU_APP_NAME/web

# Release the image
echo "Releasing the Docker image..."
heroku container:release web --app $HEROKU_APP_NAME

echo "Deployment to Heroku completed."
