FROM node:22-alpine

# Cài đặt thư viện cần thiết cho Prisma trên Alpine
RUN apk add --no-cache openssl

WORKDIR /app

# Copy các file quản lý thư viện và schema trước
COPY package*.json ./
COPY prisma ./prisma/

# Cài đặt dependencies và generate Prisma Client vào node_modules
RUN npm install
RUN npx prisma generate

# Copy toàn bộ code còn lại
COPY . .

# Build dự án
RUN npm run build

EXPOSE 3000

# Chạy bản build (thường là trong thư mục dist)
CMD ["npm", "run", "start:prod"]