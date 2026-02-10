FROM node:22-alpine

WORKDIR /app

# Copy cả package và prisma schema trước để tận dụng cache
COPY package*.json ./
COPY prisma ./prisma/ 

# Cài đặt dependencies
RUN npm install

# Generate Client (Phải làm trước build để TypeScript không báo lỗi)
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

# Nếu bạn muốn chạy dev mode
CMD ["npm", "run", "start:dev"]