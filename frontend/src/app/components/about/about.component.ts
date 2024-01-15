import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutTexts: string[] = [
    'Pipocando em Casa é um website brasileiro que trazem notícias sobre filmes, seja no cinema, serviços de streaming e premiações. O site está no ar desde 04 de outubro de 2020. Este website foi desenvolvido com o intuito de avaliação para a disciplina Desenvolvimento de Interfaces Web, da PUC Minas São  Gabriel.', 'O site obteve uma segunda versão em 05 de dezembro de 2021, com Bootstrap 4; e em 2024, com Angular 16, ambos com o intuito de aprendizado das tecnologias.'
  ]

  editors: { name: string, position: string }[] = [
    {
      name: 'Marlene Vasconcelos',
      position: 'Redação:'
    },
    {
      name: 'Marlene Moraes',
      position: 'Pesquisa:'
    },
    {
      name: 'Marlene Oliveira',
      position: 'Gerente Geral:'
    }
  ];

  socialMedias: { path: string, class: string }[] = [
    {
      path: 'https://www.facebook.com',
      class: 'bi bi-facebook social-media'
    },
    { 
      path: 'https://www.instagram.com', 
      class: 'bi bi-instagram social-media' 
    },
    { 
      path: 'https://www.twitter.com', 
      class: 'bi bi-twitter social-media'
    },
    { 
      path: 'https://www.linkedin.com', 
      class: 'bi bi-linkedin social-media' 
    },
    { 
      path: 'https://www.youtube.com', 
      class: 'bi bi-youtube social-media' 
    }
  ]
}
