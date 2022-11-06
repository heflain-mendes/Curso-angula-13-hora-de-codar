import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: 'jerry', type: 'mouser', age: 4},
    {name: 'tom', type: 'cat', age: 3},
    {name: 'brutus', type: 'dot', age: 6}
  ]

  menssageAge: string = "";
  ageVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal : Animal): void{
    this.menssageAge = `O ${animal.name} tem ${animal.age} anos`;
    this.ageVisible = true;
  }

  clear():void{
    this.ageVisible = false;
  }

}
