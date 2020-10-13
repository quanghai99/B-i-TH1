import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b1tl',
  templateUrl: './b1tl.component.html',
  styleUrls: ['./b1tl.component.css']
})
export class B1tlComponent implements OnInit {

  constructor() { }
  s=0;
  a: any;
  b: any;
  ngOnInit(): void {

  }
  tinh(){
    for(let i=1;i<=this.a;++i){
      this.s += Math.pow(this.b,i);
    }
  }
}
