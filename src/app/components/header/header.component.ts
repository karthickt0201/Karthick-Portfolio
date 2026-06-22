import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  profile = PROFILE;
  menuOpen = signal(false);

  links = [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
