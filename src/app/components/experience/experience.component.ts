import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { EXPERIENCE, EDUCATION, CERTIFICATION } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experience = EXPERIENCE;
  education = EDUCATION;
  certification = CERTIFICATION;
}
