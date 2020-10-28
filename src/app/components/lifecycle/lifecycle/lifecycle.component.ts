import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit,DoCheck {

  constructor() { }
  counter:number=0
  ngDoCheck(){
    console.log('Do Check');

  }
  ngOnInit(): void {
    console.log('ng OnInit');
  }
  clickCounter(){
      this.counter++
  }

}
