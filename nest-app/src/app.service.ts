import { Injectable } from '@nestjs/common';
import { Observable, map, of } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): Observable<any> {
    return of('Hello World - From app!').pipe(
      map((v) => ({
        msg: v,
      })),
    );
  }
}
