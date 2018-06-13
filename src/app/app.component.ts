import { Component } from '@angular/core';
import { ConsumidorService } from './consumidor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = {};

  constructor(public _consumerServ: ConsumidorService) {
  }

  mymodel = (s) => {
    (s) ? this._consumerServ.getVal(s).subscribe(d => this.data = d) : console.log('nada');
  }

}
