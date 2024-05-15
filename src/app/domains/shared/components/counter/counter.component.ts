import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  conterRef : number = 0;

  constructor(){
    console.log('consturctor');
    console.log('-', repeat(10));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log('-', repeat(10));
    console.log(changes);
    const dur = changes['duration'];
    if(dur && dur.currentValue !== dur.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(): void {
    console.log('ngOnChanges');
    console.log('-', repeat(10));
    console.log('duration', this.duration);
    console.log('message', this.message);
    this.conterRef = window.setInterval(() => {
      console.log('interval');
      this.counter.update(state => state + 1);
    },1000);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('-', repeat(10));
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    console.log('-', repeat(10));
    window.clearInterval(this.conterRef);
  }

  doSomething(){
    console.log('change')
  }
}
