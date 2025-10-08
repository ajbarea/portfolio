#!/bin/bash

# Lint and format Nuxt/Vue project

echo "Running ESLint with auto-fix..."
npm run lint:fix

echo ""
echo "Formatting with Prettier..."
npm run format

echo ""
echo "Lint and format complete!"
