import { Component, OnInit } from '@angular/core';
// import { Hero } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor() {}
  heroes = ['Dr IQ', 'Magneta', 'Demon'];
  master = 'Chakshu';
  ngOnInit(): void {}
}
