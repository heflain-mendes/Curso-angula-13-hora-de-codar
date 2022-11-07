import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  removerAnimal(animais: Animal[], animal: Animal): Animal[]{
    return animais.filter(a => a.name !== animal.name);
  }
}
