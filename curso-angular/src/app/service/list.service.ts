import { getLocaleCurrencyCode } from '@angular/common';
import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  removerAnimal(animais: Animal[], animal: Animal): Animal[] {
    return animais.filter((a) => a.name !== animal.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getAnimal(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  deleteAnimal(id: number): void{
    this.http.delete(`${this.apiUrl}/${id}`);
  }
}
