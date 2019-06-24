import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-atm-money-dispenser',
  templateUrl: './atm-money-dispenser.component.html',
  styleUrls: ['./atm-money-dispenser.component.scss']
})
export class AtmMoneyDispenserComponent implements OnInit {
  openModal: any
  amount: any
  totalNotes: any
  showAlert: any
  dispensedNotes = {}
  alertMessage: any;

  constructor(private serviceService:ServiceService) { }

  ngOnInit() {
  }

  
  atmMoney() {
    
    if(this.amount<100){
     this.showAlert =true;
     this.alertMessage = 'Minimum cash to be withdrwa'
     let _this =this;
     setTimeout(function(){
      _this.showAlert = false;
     },3000)
     return false;
    }
    if(this.amount%100 != 0){
      this.showAlert =true;
      this.alertMessage = 'Amount should be multiple of 100!'
       let _this =this;
     setTimeout(function(){
      _this.showAlert = false;
     },3000)
     return false;
    }
    var audio = new Audio('/assets/audio/Atm-Cash-machine-free-sound-effect.mp3');
    audio.play()
    audio.onended = () => {
      this.serviceService.atmButtonStopClicked();
    };
    this.serviceService.atmButtonClicked();
    this.dispensedNotes = {
      2000: 0,
      500: 0,
      200: 0,
      100: 0
    }
    var dispensedNotesArray = Object.keys(this.dispensedNotes).map((item) => {
      return parseInt(item);
    }).reverse();

    for (var j = 0; j < dispensedNotesArray.length; j++) {
      if (this.amount >= dispensedNotesArray[j]) {
        var value = this.amount / dispensedNotesArray[j];
        this.dispensedNotes[dispensedNotesArray[j]] = parseInt(value.toString().split('.')[0]);
        this.amount = this.amount % dispensedNotesArray[j];
      }
    };
    this.amount = '';
    this.totalNotes = Object.values(this.dispensedNotes).reduce((a: number, b: number) => a + b);
   
  }

}
