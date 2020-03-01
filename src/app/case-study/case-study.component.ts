import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ItemsJson from "../../assets/items.json";
@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.Study=ItemsJson[+id].Item[1].CaseStudy;
  }
  Study:any;
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
