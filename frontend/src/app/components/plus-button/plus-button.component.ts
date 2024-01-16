import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.css']
})
export class PlusButtonComponent {
  titles:string[] = ["+ Destaques", "+ Avaliações", "+ Making of", "+ Novidades"];
  path:string = '';

  constructor() {
    for(let title of this.titles){
      if(title === "+ Destaques"){
        this.path = "/highlights"
        break;
      } else if(title === "+ Avaliações"){
        this.path = "/assessments"
        break;
      } else if(title === "+ Avaliações"){
        this.path = "/assessments"
        break;
      }
    }
   }
}
