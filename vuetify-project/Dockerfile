FROM node:20-bullseye AS build
WORKDIR /app

# Install build tools for native modules
RUN apt-get update && apt-get install -y python3 make g++ git

# Copy package files
COPY package*.json ./

# Install dependencies (if npm ci fails, try npm install)
RUN npm install

# Copy source and build
COPY . .
RUN npm run build





# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy the built files from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf


# Start nginx
CMD ["nginx", "-g", "daemon off;"]
