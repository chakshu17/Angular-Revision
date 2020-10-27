import { Component, Input, OnInit } from '@angular/core';

// export interface Hero {
//   heroNames: ['Dr IQ', 'Magneta', 'Bombasto'];
// }
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})

export class ChildComponent implements OnInit {
  constructor() {}
  @Input() heroName;
  @Input() masterName:string;
  ngOnInit(): void {}
}
