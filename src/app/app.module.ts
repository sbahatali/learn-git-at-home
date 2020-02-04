import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { StudentsComponent } from './students/students.component';
import { GetDataService } from './get-data.service';
//import { Logger } from "angular2-logger/core"; // ADD THIS

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
