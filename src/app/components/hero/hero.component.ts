import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE } from '../../data/portfolio-data';

interface TerminalLine {
  prompt: boolean;
  text: string;
  status?: 'ok';
}

const SCRIPT: TerminalLine[] = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'Karthick T — Angular Developer, Bangalore' },
  { prompt: false, text: 'Angular 14 · 15 · 16 · 17 · 18' },
  { prompt: false, text: '3+ years shipping production Angular', status: 'ok' },
  { prompt: false, text: '8+ modules live, 3,000+ users served', status: 'ok' },
];

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  profile = PROFILE;
  visibleLines = signal<(TerminalLine & { typed: string; done: boolean })[]>([]);
  heroRevealed = signal(false);

  ngOnInit(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      this.visibleLines.set(SCRIPT.map((l) => ({ ...l, typed: l.text, done: true })));
      this.heroRevealed.set(true);
      return;
    }

    this.runScript();
  }

  private async runScript(): Promise<void> {
    for (const line of SCRIPT) {
      await this.typeLine(line);
      await this.wait(line.prompt ? 120 : 220);
    }
    await this.wait(200);
    this.heroRevealed.set(true);
  }

  private typeLine(line: TerminalLine): Promise<void> {
    return new Promise((resolve) => {
      const entry = { ...line, typed: '', done: false };
      this.visibleLines.set([...this.visibleLines(), entry]);
      const index = this.visibleLines().length - 1;
      const speed = line.prompt ? 38 : 12;
      let i = 0;

      const step = () => {
        i++;
        const updated = [...this.visibleLines()];
        updated[index] = { ...updated[index], typed: line.text.slice(0, i) };
        this.visibleLines.set(updated);

        if (i < line.text.length) {
          setTimeout(step, speed);
        } else {
          updated[index] = { ...updated[index], done: true };
          this.visibleLines.set(updated);
          resolve();
        }
      };
      step();
    });
  }

  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
