import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b8tl',
  templateUrl: './b8tl.component.html',
  styleUrls: ['./b8tl.component.css']
})
export class B8tlComponent implements OnInit {

  constructor() { }
  h: any;
  dt: any;
  KQ: any;
  ngOnInit(): void {

  }
  tinh(){
    this.KQ= (this.h*this.dt)/3;
  }

}
