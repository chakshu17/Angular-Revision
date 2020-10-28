import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  constructor() { }
  imageUrl='assets/main02.jpg'
  classnumbers='class1 class2'
  ngOnInit(): void {
  }

}
