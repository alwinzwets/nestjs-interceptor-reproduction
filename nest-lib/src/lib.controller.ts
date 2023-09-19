import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LibService } from './lib.service';

@Controller('/lib')
export class LibController {
  constructor(private readonly libService: LibService) {}

  @Get()
  getHello(): Observable<any> {
    return this.libService.getHello();
  }
}
