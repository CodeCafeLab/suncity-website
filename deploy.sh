#!/bin/bash

# Deployment script for suncity-website
# This script pulls latest changes, builds, and restarts the application

set -e

echo "Starting deployment..."

cd /var/www/suncity-website

echo "Pulling latest changes from git..."
git pull origin main

echo "Installing dependencies..."
npm ci --production

echo "Building application..."
npm run build

echo "Restarting PM2 process..."
pm2 restart suncity-website || pm2 start ecosystem.config.js

echo "Saving PM2 process list..."
pm2 save

echo "Deployment completed successfully!"

