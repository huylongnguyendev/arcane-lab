import { NestFactory } from "@nestjs/core"
import { ValidationPipe, VersioningType } from "@nestjs/common"
import { AppModule } from "./app.module"
import helmet from "helmet"
import compression from "compression"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(helmet())
  app.use(compression())
  app.enableCors({
    origin: true, // Hoặc điền domain cụ thể trong production
    credentials: true,
    // Các phương thức được phép
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // Các Header được phép gửi lên
    allowedHeaders: "Content-Type, Accept, Authorization",
  })
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1",
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Loại bỏ các field không được định nghĩa trong DTO
      forbidNonWhitelisted: true, // Báo lỗi nếu gửi lên field "lạ"
      transform: true, // Tự động convert kiểu dữ liệu (vd: string -> number)
    }),
  )

  app.enableShutdownHooks()

  const port = process.env.PORT || 3000
  await app.listen(port, "0.0.0.0")
}

bootstrap().catch((err) => {
  console.error("Lỗi khởi động server:", err)
  process.exit(1)
})
