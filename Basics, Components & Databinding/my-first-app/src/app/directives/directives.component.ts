import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showSecrete = false;
  log=[];
  constructor() { }

  ngOnInit(): void {
  }
  onToggleDetail(){
    this.showSecrete = !this.showSecrete;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
