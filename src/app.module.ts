import { Module } from '@nestjs/common';
import Services from './Services';
import Controllers from './Controllers';

@Module({
  imports: [],
  controllers: [...Controllers],
  providers: [...Services],
})
export class AppModule {}
