# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your Express app is listening on (usually 3000)
EXPOSE 3000

# Start your Node.js/Express application using "npm start"
CMD [ "npm", "start" ]

