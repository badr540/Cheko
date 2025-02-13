# Step 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json ./
# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app using Vite
RUN npm run build

# Step 2: Serve the app
FROM docker.io/nginx:alpine

# Copy the built app to Nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port (default for Nginx is 80)
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]