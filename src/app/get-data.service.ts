import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map, catchError, flatMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
 url = "http://localhost:3000/students";

 url_byName = `http://localhost:3000/students?name=`; // this is used when get like where name="Faraz"

 public list: any[]= [
  {
    "name": "Sbahat",
    "country": "Pak"
  },
  {
    "name": "Faraz",
    "country": "Dubai"
  },
  {
    "name": "Aneeq",
    "country": "Malaysia"
  }
];
 
  constructor(private http: HttpClient) { } 
getStudents(): any{
  

  let header = {headers: new HttpHeaders({
    'Authorization': 'my-auth-token',
    'x-header': 'x-value',
    'content-type': 'applicatin/json'
  })};
// let options = new RequestOptions({ headers: headers });
  return this.http.get(this.url,  header).subscribe(data=>{
    console.log(data);
  });

  
}

postData(){
  let header = {headers: new HttpHeaders({
    'Authorization': 'my-auth-token',
    'x-header': 'x-alue',
    'content-type': 'applicatin/json'
  })};
 
 return  this.http.post(this.url, this.list, header);
}


jsonPData(){// login successful and pss it second service 
  return this.http.get(this.url).pipe(map(data=>{
    const newArray = [];
    data.forEach(element => {
      if(element.name === 'Faraz') {
        newArray.push(element); /// if Login is successful
      }
    });
    return newArray;
  }), flatMap(newarray=>{ // come here and get data bt flatMap operator can we continue tomarrow ?
    // yes we will continue from right here and please get some good internet reception , thank u
    return this.http.post(this.url, newarray);

  }));

}
// Share data between diff components
getList(): Observable<any[]> { 
    let obg: Observable<any[]> = new Observable(observer=> {
    observer.next(this.list);
    observer.complete();
    });
  return obg;
}


setstudentList(list: any[]): void {
this.list = list;
}

getStudentLis(): any[]{
  return this.list;
}

}
