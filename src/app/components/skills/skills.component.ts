import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { SKILLS } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  groups = SKILLS;
  activeIndex = signal(0);

  select(index: number): void {
    this.activeIndex.set(index);
  }

  get active() {
    return this.groups[this.activeIndex()];
  }
}
