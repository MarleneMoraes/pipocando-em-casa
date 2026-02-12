import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuItems = [
    { label: 'Releases', link: '/' },
    { label: 'Featured', link: '/featured' },
    { label: 'Reviews', link: '/reviews' },
    { label: 'Interviews & Making Of', link: '/making-of' },
    { label: 'News', link: '/news' },
  ];

  searchTerm = signal('');
  private router = inject(Router);

  onSearch() {
    if (this.searchTerm().trim()) {
      this.router.navigate(['/search', this.searchTerm()]);
    }
    this.searchTerm.set('');
  }
}
