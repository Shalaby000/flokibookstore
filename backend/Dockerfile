FROM node:14

WORKDIR /home/floki/All_Data/Bookstore_Project/flokibookstore

# Ensure that the backend directory exists and copy package files
RUN mkdir -p backend
COPY backend/package.json backend/package-lock.json ./backend/

# Change directory to backend
WORKDIR /home/floki/All_Data/Bookstore_Project/flokibookstore/backend

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Change directory back to project root
WORKDIR /home/floki/All_Data/Bookstore_Project/flokibookstore

# Start the application
CMD [ "npm", "start" ]
