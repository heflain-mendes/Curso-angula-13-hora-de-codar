import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envets',
  templateUrl: './envets.component.html',
  styleUrls: ['./envets.component.css'],
})
export class EnvetsComponent implements OnInit {
  show: boolean = true;
  color: string = "black";
  
  constructor() {}

  ngOnInit(): void {}

  showMensage(): void {
    this.show = !this.show;
  }

  alterarCor() : void{
    this.color = "red";
  }

  resetCor() : void{
    this.color = "black";
  }
}
