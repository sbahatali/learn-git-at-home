import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  students:any[] = [];
  constructor() { }
  ////
  onChange(selectClass){
    switch(selectClass){
      case "10":
        this.classTenth();
        break;
      case "9":
        this.classNinth();
        break;
      case "8":
        this.classEigth();
        break;
    }
  }
  //// 
  classTenth(){
    //console.log("10 class selected");
    this.students =[
      {"id": 1, "name": "Rahat"},
      {"id": 1, "name": "Faisal"}
    ];
  }
  /////
  classNinth(){
    //console.log("9 class selected");
    this.students =[
      {"id": 1, "name": "ALI"},
      {"id": 1, "name": "Aneeq"}
    ];
  }
  /////
  classEigth(){
    //console.log("8 class selected");
    this.students =[
      {"id": 1, "name": "Faraz"},
      {"id": 1, "name": "Salman"}
    ];
  }


  ngOnInit() {
  }

}
