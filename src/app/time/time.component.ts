import { Component,EventEmitter,Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})

export class TimeComponent {

  @Input() timezone = " ";   //a szülőtől érkezik majd []-ben a megfelelő adat
  @Input() isCurrent = true;


  @Output() changeTimezone = new EventEmitter<string>(); //kiközvetítjük a szülő felé, hogy a másik button-nal jelölés történt

   time='';

// a gyerekkomponens button-functionja
  update(){
    //new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
    this.time = new Date().toLocaleString('hu-HU', { timeZone: this.timezone });

  }
  
  timeZoneSelectorClick(){
    this.changeTimezone.emit(this.timezone)//kiközvetítjük a szülő felé, hogy a másik button-nal jelölés történt
  }
}
