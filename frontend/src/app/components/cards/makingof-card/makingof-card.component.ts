import { Component } from '@angular/core';

@Component({
  selector: 'app-makingof-card',
  templateUrl: './makingof-card.component.html',
  styleUrls: ['./makingof-card.component.css']
})
export class MakingofCardComponent {
  articles:{ iframe:string, title:string, direction: string, screenplay:string, release:string }[]= [
    {
      iframe:  '<iframe width="100%" height="60%" src="https://www.youtube.com/embed/6PjYlCyxxHI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title: 'Enola Holmes',
      direction: 'Harry Bradbeer',
      screenplay: 'Jack Thorne',
      release: '23/09/2020'
    },
    {
      iframe:  '<iframe width="100%" height="60%" src="https://www.youtube.com/embed/GzF51d_N-uM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title: 'Power',
      direction: 'Henry Joost e Ariel Schulman',
      screenplay: 'Mattson Tomlin',
      release: '14/08/2020'
    },
    {
      iframe:  '<iframe width="100%" height="60%" src="https://www.youtube.com/embed/XbPVAiX3Igg" frameborder="0" allowfullscreen></iframe>',
      title: 'Mulan',
      direction: 'Niki Caro e Ariel Schulman',
      screenplay: 'Rick Jaffa, Amanda Silver, Lauren Hynek e Elizabeth Martin',
      release: '04/09/2020'
    }
  ];
}
