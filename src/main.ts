import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbConnectionService } from './modules/dbConnection/dbConnection.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dbConnection = app.get(DbConnectionService);
  await dbConnection.connect();

  app.enableCors();

  const port = 4000;

  await app.listen(port);
  console.log(`Server started at host http://localhost:${port}`);
}

bootstrap();
