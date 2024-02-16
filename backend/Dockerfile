FROM node:14

WORKDIR /home/floki/All_Data/Bookstore_Project

# Ensure that the backend directory exists and copy package files
COPY backend/package.json backend/package-lock.json ./backend/

# Change directory to backend
WORKDIR /home/floki/All_Data/Bookstore_Project/backend

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Change directory back to project root
WORKDIR /home/floki/All_Data/Bookstore_Project

# Start the application
CMD [ "npm", "start" ]
