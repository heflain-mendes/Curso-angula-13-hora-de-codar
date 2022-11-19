import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  animal? : Animal; 

  constructor(private listService : ListService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getAnimal(id).subscribe((animal) => this.animal = animal);
  }
}
