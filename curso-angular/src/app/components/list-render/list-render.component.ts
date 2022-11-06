import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: 'jerry', type: 'mouser'},
    {name: 'tom', type: 'cat'},
    {name: 'brutus', type: 'dot'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
