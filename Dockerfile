# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock if you use Yarn) to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install serve globally for serving the build
RUN npm install -g serve

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the app
RUN npm run build

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]

# Inform Docker that the container listens on port 3000 at runtime.
EXPOSE 3000
