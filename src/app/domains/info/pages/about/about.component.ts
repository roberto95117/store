import { Component, input, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  mesage = signal('hi');

  changeDuration(event: Event){
    const value = event.target as HTMLInputElement;
    this.duration.set(value.valueAsNumber);
  }

  changeMessage(event: Event){
    const value = event.target as HTMLInputElement;
    this.mesage.set(value.value);
  }


}
