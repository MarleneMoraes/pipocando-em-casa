import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GenreFilter } from '../../shared/components/genre-filter/genre-filter';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '../../shared/classes/base-component/base-component';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, RouterLink, GenreFilter],
  templateUrl: './featured.html',
  styleUrl: './featured.scss',
})
export class Featured  extends BaseComponent { }

