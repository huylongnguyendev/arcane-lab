FROM node:22-alpine

WORKDIR /app

# Tận dụng cache cho node_modules
COPY package*.json ./
RUN npm install

# Copy code và build
COPY . .
RUN npm run build

EXPOSE 3000

# Next.js chạy ở cổng 3000
CMD ["npm", "run", "start"]