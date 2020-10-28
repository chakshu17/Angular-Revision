import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.scss']
})
export class BuiltInComponent implements OnInit {

  constructor() { }
  gradientToggle: boolean;
  toggleButton:boolean;
  messages:string[];
  ngOnInit(): void {
    this.gradientToggle = true;
    this.toggleButton = true;
    this.messages=[
      'message 1',
      'message 2',
      'message 3',
      'message 4',
      'message 5',
    ];


  }

}
