import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NumEnum} from './numEnum';  
import {Employee} from './employee';

import { Observable } from 'rxjs/Rx';
import {appService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',   
  styleUrls: ['./app.component.css'],
  providers: [appService]
})
export class AppComponent {
  value: string = "";

  title = 'This title is coming from app component';
  employeName="Employe Name TextBox";
  isValid=true;
  ids = [1,2,3,4];  

  emp1=new Employee(10,'Steve');
  emp2=new Employee(101,'Steve');
  emp3=new Employee(10,'Nelson Mandela');
  myNumEnum = NumEnum;  //we need to create a component property and will assign our NumEnum to it
  
  public items = Observable.of([1, 2, 3])
  public repos: Observable<any>

  constructor(private _appService: appService) {
    this.repos = _appService.getReposForUser('auth0')
    console.log(this.repos);
   } 

  myFunc(){
    console.log("function called");
  }

  fakeArray = new Array(4);

   ngOnInit(): void { 
      this.value = this._appService.getApp(); 
   } 
}
