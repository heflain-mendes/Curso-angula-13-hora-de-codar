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
  animais: Animal[] = [
    { name: 'felicia', type: 'coelho', age: 2 },
    { name: 'penelope', type: 'coelho', age: 3 },
  ];

  constructor() {}

  ngOnInit(): void {}

  eventOcurred(): void {
    this.texto = 'trolei';
    this.eventClickButton1.emit({texto: this.texto});
  }

  clickNow(animal : Animal): void{
    this.escolheuAnimal.emit(animal);
  }
}
