import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-atm-modal',
  templateUrl: './atm-modal.component.html',
  styleUrls: ['./atm-modal.component.scss']
})

export class AtmModalComponent implements OnInit {
  showModal: boolean;
  bodyElement;
  divElement;
  constructor(private serviceService: ServiceService) {
    this.bodyElement = document.getElementsByTagName('body');
    this.divElement = document.createElement('div');
    this.divElement.className = "modal-backdrop fade show";
  }

  ngOnInit() {
    this.serviceService.returnSubject('atmClicked').subscribe(res => {
      this.bodyElement[0].className = "model-open";
      this.bodyElement[0].appendChild(this.divElement);
      this.showModal = true;
    })
    this.serviceService.returnSubject('atmStoppedClicked').subscribe(res => {
      this.closeModal();
    })
  }

  closeModal(){
    this.bodyElement[0].removeChild(this.divElement);
    this.showModal = false;
    this.bodyElement[0].className = "";
  }
}
