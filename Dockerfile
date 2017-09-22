FROM node:8.5-alpine

# Install npm dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port for graphql
EXPOSE 3000
CMD [ "npm", "start" ]