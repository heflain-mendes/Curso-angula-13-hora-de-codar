import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() name: string = '';
  @Input() userData? : {name : string, email : string};

  constructor() { }

  ngOnInit(): void {
  }

}
