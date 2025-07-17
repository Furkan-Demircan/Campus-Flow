import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './_common/exceptions/http.exceptions.filter';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const findFirstError = (errors: ValidationError[]) => {
          for (const error of errors) {
            if (error.constraints) {
              console.log(error.constraints);
              return Object.values(error.constraints)[0];
            }
          }
        };
        const firstError = findFirstError(errors);
        return new BadRequestException(firstError);
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
