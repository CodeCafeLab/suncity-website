#!/bin/bash

# Helper script to push to GitHub
# Usage: ./push-to-github.sh [token]
# If token is provided, it will be used automatically

set -e

cd /var/www/suncity-website

if [ -n "$1" ]; then
    # Use token if provided
    echo "Using provided token..."
    git push https://$1@github.com/CodeCafeLab/suncity-website.git main
else
    echo "Pushing to GitHub..."
    echo "If prompted for credentials:"
    echo "  Username: Your GitHub username"
    echo "  Password: Your Personal Access Token (not your GitHub password)"
    echo ""
    git push origin main
fi

echo "Push completed successfully!"

