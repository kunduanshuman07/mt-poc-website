# Use the official Node.js image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies inside the container
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port your backend is running on (e.g., 5000)
EXPOSE 5000

# Command to start your application
CMD ["npm", "start"]
