# Use the official Node.js image for the build stage
FROM node:14 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the application for production
RUN npm run build

# Use a lightweight web server to serve the build files
FROM nginx:alpine

# Copy the build files from the previous stage to the Nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that Nginx will run on (e.g., 80)
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
