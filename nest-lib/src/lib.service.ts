import { Injectable } from '@nestjs/common';
import { Observable, map, of } from 'rxjs';

@Injectable()
export class LibService {
  getHello(): Observable<any> {
    return of('Hello World - From lib!').pipe(
      map((v) => ({
        msg: v,
      })),
    );
  }
}
