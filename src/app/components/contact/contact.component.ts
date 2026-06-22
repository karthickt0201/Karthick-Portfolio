import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  profile = PROFILE;
}
