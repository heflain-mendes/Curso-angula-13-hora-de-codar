import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent implements OnInit {

  menssae: string = "TESTANDO OLÀ MUNDO"
  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
