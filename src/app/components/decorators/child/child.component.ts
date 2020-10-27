import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output () voted = new EventEmitter<boolean>();

  counter:number=0

  ngOnInit(): void {}
  didVote:boolean=false
  vote(agreed:boolean){
    this.voted.emit(agreed);
    this.didVote=true;
  }

}
