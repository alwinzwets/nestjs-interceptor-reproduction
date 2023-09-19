import { Module } from '@nestjs/common';
import { LibController } from './lib.controller';
import { LibService } from './lib.service';

@Module({
  imports: [],
  controllers: [LibController],
  providers: [LibService],
})
export class LibModule {}
