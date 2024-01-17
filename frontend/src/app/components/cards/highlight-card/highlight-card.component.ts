import { Component } from '@angular/core';

@Component({
  selector: 'app-highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.css']
})
export class HighlightCardComponent {
  films:{ poster:string, title:string, summary:string }[]= [
    {
      poster: '../assets/img/highlights_img1.jpg',
      title: 'HARRIET',
      summary: 'Harriet Tubman é ativista política que ajudou centenas de escravos a fugirem do sul dos Estados Unidos.'
    },
    {
      poster: '../assets/img/highlights_img2.png',
      title: 'Por Lugares Incríveis',
      summary: 'Dois adolescentes embarcam em uma jornada transformadora para visitar as maravilhas de Indiana.'
    },
    {
      poster: '../assets/img/highlights_img3.jpeg',
      title: 'Viúva Negra',
      summary: 'Após seu nascimento, Natasha Romanoff é dada à KGB, que a prepara para se tornar sua agente definitiva.'
    },
    {
      poster: '../assets/img/highlights_img4.png',
      title: 'Turma da Mônica: Laços',
      summary: 'Cebolinha conta com seus amigos para encontrar seu cachorro desaparecido.'
    }
  ];
}
