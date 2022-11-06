import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber() :void{
    this.myNumber = Math.floor(Math.random() * 10) + 1;
  }

  onResetNumber() : void{
    this.myNumber = -1;
  }

}
