import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  constructor() { }
  imageUrl='assets/main02.jpg'
  classNumbers='class1 class2'

  mainClass='mainClass'
  classImageUrl='assets/main.jpg'

  styleImageUrl='assets/main1.jpg'
  styleWidth='70%'
  styleClasses="width: 70%;border-radius: 20px"
  ngOnInit(): void {
  }

}
