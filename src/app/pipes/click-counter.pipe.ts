import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clickCounter',
})
export class ClickCounterPipe implements PipeTransform {
  transform(counter: number): string {
    let clickCounter;
    if (counter === 0) {
      clickCounter = 'Counter is ' + counter;
    } else {
      clickCounter = 'Counter is Incremented to ' + counter;
    }

    return clickCounter;
  }
}
