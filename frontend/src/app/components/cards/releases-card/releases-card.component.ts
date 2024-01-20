import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-releases-card',
  templateUrl: './releases-card.component.html',
  styleUrls: ['./releases-card.component.css']
})
export class ReleasesCardComponent {
  releases: { path: SafeResourceUrl; title: string; summary: string; director: string; screenwriter: string; cast: string; releaseDate: string; rating: string }[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.releases = [
      {
        path: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/veENW22O0Pk'),
        title: 'ROSA E MOMO',
        summary: 'Uma sobrevivente do Holocausto abre as portas de casa para um garoto de rua complicado. É o começo de uma amizade improvável.',
        director: 'Edoardo Ponti',
        screenwriter: 'Ugo Chiti, Fabio Natale, Edoardo Ponti',
        cast: 'Sophia Loren, Ibrahima Gueye, Renato Carpentieri',
        releaseDate: '13/11',
        rating: '&starf;&starf;&starf;&starf;&starf;'
      },
      {
        path: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/uXm6T1rAe28'),
        title: 'TENET',
        summary: 'Armado com apenas uma palavra - Tenet - e lutando pela sobrevivência do mundo.',
        director: 'Christopher Nolan',
        screenwriter: 'Christopher Nolan',
        cast: 'John David Washington, Robert Pattinson, Elizabeth Debicki',
        releaseDate: '29/10',
        rating: '&starf;&starf;&starf;&starf;&star;'
      },
      {
        path: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8TQLGcnJ3mc'),
        title: 'CONVENÇÃO DAS BRUXAS',
        summary: 'O remake de Convenção das Bruxas, clássico de fantasia dos anos 1990, acompanha um garoto de sete anos que se depara com uma conferência de bruxas em um hotel.',
        director: 'Robert Zemeckis',
        screenwriter: 'Robert Zemeckis, Kenya Barris, Guillermo del Toro',
        cast: 'Anne Hathaway, Octavia Spencer, Kristin Chenoweth',
        releaseDate: '19/11',
        rating: '&starf;&starf;&starf;&star;&star;'
      }
    ];
  }
}
