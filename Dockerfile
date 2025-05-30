# Use Node 20 for compatibility with NestJS v11+
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy the rest of the application files
COPY . .

# Build the NestJS app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start:prod"]
