import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-makingof-lg-card',
  templateUrl: './makingof-lg-card.component.html',
  styleUrls: ['./makingof-lg-card.component.css']
})
export class MakingofLgCardComponent {
  articles: { iframe: SafeResourceUrl; title: string; direction: string; screenplay: string; text: string; }[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.articles = [
      {
        iframe: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6PjYlCyxxHI'),
        title: 'Enola Holmes',
        direction: 'Harry Bradbeer',
        screenplay: 'Jack Thorne',
        text: 'Making Of do filme Enola Holmes, com as melhores cenas e momentos durante as gravações da série que estreia dia 23 de setembro, na Netflix.'
      },
      {
        iframe: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/XbPVAiX3Igg'),
        title: 'Mulan',
        direction: 'Niki Caro e Ariel Schulman',
        screenplay: 'Rick Jaffa, Amanda Silver, Lauren Hynek e Elizabeth Martin',
        text: 'Making Of do filme Mulan com detalhes das cenas especiais. Estreia dia 04 de setembro, nos cinemas.'
      }
    ];
  }
}
