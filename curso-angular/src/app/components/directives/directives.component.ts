import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size : number = 12;
  color : string = "red";

  classes : [string, string] = ["green-components", "size-component"];
  underline : string = "underline";
  constructor() { }

  ngOnInit(): void {
  }

}
