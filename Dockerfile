# Use an official Nginx runtime as a parent image
FROM nginx:1.21-alpine

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the compiled output to the container
COPY dist/helix-ow-website /usr/share/nginx/html