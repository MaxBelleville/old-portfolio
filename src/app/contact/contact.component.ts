import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  overlay:HTMLElement;
  menu:HTMLElement;
  header:HTMLElement;
  toggleOn: boolean =false;
  onClick() {
    this.overlay=document.getElementById("overlay");
    this.menu=document.getElementById("menu");
    this.header=document.getElementById("header");
    if(!this.toggleOn){
      this.toggleOn=true;
      this.menu.style.display="block";
      this.overlay.style.height=(document.body.offsetHeight-this.header.offsetHeight)+"px";
    }
    else {
      this.toggleOn=false;
      this.menu.style.display="none";
      this.overlay.style.height="0";
    }
  }
}
