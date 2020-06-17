import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-editt',
  templateUrl: './recipe-editt.component.html',
  styleUrls: ['./recipe-editt.component.css']
})
export class RecipeEdittComponent implements OnInit {
  id:number;
  editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      )
  }

}
