import { Component, OnInit, Input, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-atm-modal',
  templateUrl: './atm-modal.component.html',
  styleUrls: ['./atm-modal.component.scss']
})


  
  

export class AtmModalComponent implements OnInit {
  showModal: any
  @Input() openModal: any;
  element:any;
  constructor(private el:ElementRef) { 
    this.element = el;
    console.log(this.openModal,'openModal')
  }

  ngOnChanges(): void {
    console.log(this.openModal,'openModalopenModal', this.element)
}
  
  
  ngOnInit() {
  }
  
  
}
