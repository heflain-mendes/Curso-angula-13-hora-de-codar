import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-pai-teste',
  templateUrl: './pai-teste.component.html',
  styleUrls: ['./pai-teste.component.css']
})
export class PaiTesteComponent implements OnInit {
  texto : string = "ainda não clicado";
  animalEscolhido?: Animal;

  constructor() { }

  ngOnInit(): void {
  }

  onEventClickButton1(respostaFilhor: {texto : string}): void{
    this.texto = respostaFilhor.texto;
  }

  onEscolheuUmAnimal(animal: Animal){
    this.animalEscolhido = animal;
  }
}
