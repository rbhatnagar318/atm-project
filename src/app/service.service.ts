import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  atmClicked = new Subject<boolean>();
  constructor() { }
  atmButtonClicked(){
    this.atmClicked.next();
  }

  returnSubject(subject): Observable<any> {
    if (subject === 'atmClicked') {
      return this.atmClicked.asObservable();
    }
  }
  
}
