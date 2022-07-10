import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transformResponse/transformResponse.interceptor';
import { CatchErrorInterceptor } from './common/interceptors/catchError/catchError.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(
    new TransformInterceptor(),
    new CatchErrorInterceptor(),
  );
  await app.listen(3000);
}
bootstrap();
