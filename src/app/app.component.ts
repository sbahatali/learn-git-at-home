import { Component, OnInit, OnChanges } from '@angular/core';
import { GetDataService } from './get-data.service';
//import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'Learn Angular on 01/30/2020';
  public name:string;
  private fruits = ["Apple", "Kiwi", "Banana"];
  constructor(public getData: GetDataService){

  }

  ngOnChanges(){
    console.log("ochange");
  }
  ngOnInit(){

    this.getData.jsonPData().subscribe(data=>{
      console.log("using map" +data)
    })

      
  //this.getData.getList().subscribe()
    this.getData.getList().subscribe(data=>{
      console.log(data);
      // data.forEach(obj=>{
      //   if (obj.name=== 'Faraz'){
      //     console.log(obj);
      //   }
      // })
    })
 
  }

  public updateName(): void {
    console.log(this.name);  }

}

export interface sharedStudents{
  name: string,
  id: number
}
