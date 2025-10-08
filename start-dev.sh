#!/bin/bash

# Setup and start Nuxt development server

echo "Installing dependencies..."
npm install

echo ""
echo "Updating browserslist database..."
npx update-browserslist-db@latest

echo ""
echo "Running security audit fixes..."
npm audit fix

echo ""
echo "Starting development server..."
echo "Opening browser in 10 seconds..."
(sleep 10 && start http://localhost:3000/portfolio/) &
npm run dev