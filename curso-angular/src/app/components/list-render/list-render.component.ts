import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = []

  menssageAge: string = "";
  ageVisible: boolean = false;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  showAge(animal : Animal): void{
    this.menssageAge = `O ${animal.name} tem ${animal.age} anos`;
    this.ageVisible = true;
  }

  clear():void{
    this.ageVisible = false;
  }

  removerAnimal(animal : Animal): void{
    this.animals = this.listService.removerAnimal(this.animals, animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => { this.animals = animals});
  }
}
