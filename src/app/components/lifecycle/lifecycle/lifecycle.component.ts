import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  constructor() {}
  counter: number = 0;

  ngDoCheck() {
    console.log('Do Check');
  }
  ngOnChanges() {
    console.log('Ng OnChanges');
  }
  ngOnInit(): void {
    console.log('ng OnInit');
  }
  ngAfterContentInit() {
    console.log('After COntent Init');
  }
  ngAfterContentChecked() {
    console.log('After COntent Checked');
  }
  ngAfterViewInit() {
    console.log('After View Init');
  }
  ngAfterViewChecked() {
    console.log('After View Chekced');
  }

  clickCounter() {
    this.counter++;
  }
}
