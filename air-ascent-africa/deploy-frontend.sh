#!/bin/bash

# Exit on error
set -e

# Build the frontend
echo "Building the frontend..."
npm run build

# Deploy to Netlify
echo "Deploying to Netlify..."
npx netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID

echo "Deployment to Netlify completed."
