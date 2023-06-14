import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public data$ = new BehaviorSubject<any>({
    termUse:false,
    privacy: false,
    accept: false,
  });

  public data = this.data$.asObservable();

  public setData(data: any) {
      this.data$.next(data);
  }


  constructor() { }
}
