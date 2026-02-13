import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

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
    { label: 'Home', link: '/', exact: true },
    { label: 'Featured', link: '/featured', exact: false },
    { label: 'Reviews', link: '/reviews', exact: false },
    { label: 'Interviews & Making Of', link: '/making-of', exact: false },
    { label: 'News', link: '/news', exact: false },
  ];

  searchTerm = signal('');
  isMobileMenuOpen = signal(false);
  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isMobileMenuOpen.set(false);
    });
  }

  onSearch() {
    if (this.searchTerm().trim()) {
      this.router.navigate(['/search', this.searchTerm()]);
      this.isMobileMenuOpen.set(false);
    }
    this.searchTerm.set('');
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }
}
