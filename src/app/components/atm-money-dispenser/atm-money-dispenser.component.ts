import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm-money-dispenser',
  templateUrl: './atm-money-dispenser.component.html',
  styleUrls: ['./atm-money-dispenser.component.scss']
})
export class AtmMoneyDispenserComponent implements OnInit {
  amount: any
  totalNotes: any
  dispensedNotes={}
  constructor() { }

  ngOnInit() {
    this.initFunc();
  }

  initFunc(){

  }

  atmMoney() {
    this.dispensedNotes = {
      2000: 0,
      500: 0,
      200: 0,
      100: 0
    }
    var dispensedNotesArray = Object.keys(this.dispensedNotes).map((item) => {
      return parseInt(item);
    }).reverse();
    for (var i = 0; i < dispensedNotesArray.length; i++) {
      for (var j = 0; j < dispensedNotesArray.length; j++) {
        if (this.amount >= dispensedNotesArray[j]) {
          var value = this.amount / dispensedNotesArray[j];
          this.dispensedNotes[dispensedNotesArray[j]] = parseInt(value.toString().split('.')[0]);
          this.amount = this.amount % dispensedNotesArray[j];
        }
      }
    };
    this.totalNotes = Object.values(this.dispensedNotes).reduce((a:number, b:number) => a + b);
  }
}