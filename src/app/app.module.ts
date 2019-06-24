import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtmMoneyDispenserComponent } from './components/atm-money-dispenser/atm-money-dispenser.component';
import { AtmModalComponent } from './components/atm-modal/atm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmMoneyDispenserComponent,
    AtmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
