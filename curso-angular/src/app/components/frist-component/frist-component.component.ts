import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frist-component',
  templateUrl: './frist-component.component.html',
  styleUrls: ['./frist-component.component.css']
})
export class FristComponentComponent implements OnInit {
  name : string = 'heflain';
  age : number = 22;
  job : string = "programador";
  hobbis = ["correr", "jogar bola", "estudar"]
  car = {
    name : "Palio",
    age : 2022
  }

  constructor() { }

  ngOnInit(): void {
  }

}
