import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  name: string='';
  agreed = 0
  disagreed= 0

  ngOnInit(): void {}

  addNameHandler(f: NgForm) {
    this.name = f.value.inputName;
  }

  onVoted(agreed:boolean){
    agreed ? this.agreed++ : this.disagreed++
  }

}
