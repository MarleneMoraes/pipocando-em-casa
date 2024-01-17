import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  categories:{ value:string, type:string }[]= [
    {
      value: '1',
      type: 'Aventura'
    },
    {
      value: '2',
      type: 'Ação'
    },
    {
      value: '3',
      type: 'Comédia'
    },
    {
      value: '4',
      type: 'Romance'
    },
    {
      value: '5',
      type: 'Suspense'
    },
    {
      value: '6',
      type: 'Terror'
    },
  ];
}
