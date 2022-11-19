import { ListService } from 'src/app/service/list.service';
import { Animal } from 'src/app/Animal';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filho-teste',
  templateUrl: './filho-teste.component.html',
  styleUrls: ['./filho-teste.component.css'],
})
export class FilhoTesteComponent implements OnInit {
  @Input() texto: string = '';
  @Output() eventClickButton1: EventEmitter<any> = new EventEmitter();
  @Output() escolheuAnimal: EventEmitter<any> = new EventEmitter();
  animais: Animal[] = [];

  constructor(private listService : ListService) {}

  ngOnInit(): void {}

  eventOcurred(): void {
    this.texto = 'trolei';
    this.eventClickButton1.emit({texto: this.texto});
  }

  clickNow(animal : Animal): void{
    this.escolheuAnimal.emit(animal);
  }

  getAll(): void{
    this.listService.getAll().subscribe((animals) => {this.animais = animals});
  }
}
