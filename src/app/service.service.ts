import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  atmClicked = new Subject<boolean>();
  atmStoppedClicked = new Subject<boolean>();

  constructor() { }
  atmButtonClicked(){
    this.atmClicked.next();
  }

  atmButtonStopClicked(){
    this.atmStoppedClicked.next();
  }

  returnSubject(subject): Observable<any> {
    if (subject === 'atmClicked') {
      return this.atmClicked.asObservable();
    }
    if (subject === 'atmStoppedClicked') {
      return this.atmStoppedClicked.asObservable();
    }
  }
  
}
