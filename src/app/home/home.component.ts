import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { 
  }

  ngOnInit() {
   
  }
  overlay:HTMLElement;
  main:HTMLElement;
  menu:HTMLElement;
  toggleOn: boolean =false;
  onClick() {
    this.overlay=document.getElementById("overlay");
    this.menu=document.getElementById("menu");
    this.main=document.getElementById("main");
    if(!this.toggleOn){
      this.toggleOn=true;
      this.menu.style.display="block";
      this.overlay.style.height=(<HTMLElement>this.main.firstElementChild).offsetHeight+"px";
    }
    else {
      this.toggleOn=false;
      this.menu.style.display="none";
      this.overlay.style.height="0";
    }
  }
}
