import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  constructor() { }
  actionName='Demon King'
  imageUrl='assets/main02.jpg'
  classNumbers='class1 class2'

  mainClass='mainClass'
  classImageUrl='assets/main.jpg'

  styleImageUrl='assets/main1.jpg'
  styleWidth='70%'
  styleClasses="width: 70%;border-radius: 20px"
  counter:number=0
  ngOnInit(): void {
  }
  clickCounter() {
    this.counter++;
  }

}
