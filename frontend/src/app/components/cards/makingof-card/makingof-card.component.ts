import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-makingof-card',
  templateUrl: './makingof-card.component.html',
  styleUrls: ['./makingof-card.component.css']
})
export class MakingofCardComponent {
  articles: { iframe: SafeResourceUrl; title: string; direction: string; screenplay: string; release: string; }[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.articles = [
      {
        iframe: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6PjYlCyxxHI'),
        title: 'Enola Holmes',
        direction: 'Harry Bradbeer',
        screenplay: 'Jack Thorne',
        release: '23/09/2020'
      },
      {
        iframe: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/GzF51d_N-uM'),
        title: 'Power',
        direction: 'Henry Joost e Ariel Schulman',
        screenplay: 'Mattson Tomlin',
        release: '14/08/2020'
      },
      {
        iframe: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/XbPVAiX3Igg'),
        title: 'Mulan',
        direction: 'Niki Caro e Ariel Schulman',
        screenplay: 'Rick Jaffa, Amanda Silver, Lauren Hynek e Elizabeth Martin',
        release: '04/09/2020'
      }
    ];
  }
}
