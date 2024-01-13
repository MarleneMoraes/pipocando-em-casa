import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
	imports: [NgbCollapseModule, CommonModule, RouterLink],
})
export class HeaderComponent {
    isMenuCollapsed = true;
    pageHome: { path: string; title: string; } =
    {
      path: '/',
      title: 'Pipocando Em Casa'
    };

    options: { path: string; title: string; }[] =
    [
      {
        path: '/realeases',
        title: 'Lançamentos'
      },
      {
        path: '/highlights',
        title: 'Em Destaque'
      },
      {
        path: '/making-of',
        title: 'Entrevistas & Making Of'
      },
      {
        path: '/news',
        title: 'Novidades'
      }
    ];
}
