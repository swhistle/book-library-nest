import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transformResponse/transformResponse.interceptor';
import { CatchErrorInterceptor } from './common/interceptors/catchError/catchError.interceptor';
import { HttpExceptionFilter } from './common/filters/httpException/httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(
    new TransformInterceptor(),
    new CatchErrorInterceptor(),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}
bootstrap();
