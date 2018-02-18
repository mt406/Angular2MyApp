import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';


import { FormsModule } from '@angular/forms';  //NOTE : <<<< import it here

import { HttpModule } from '@angular/http'; // NOTE : In order to use Http in your app you will need to add the HttpModule to your app.module.ts:

import { AppComponent } from './app.component';
import {MsgComponent} from './msg.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { FromDemoComponentComponent } from './from-demo-component/from-demo-component.component';

import { RouterModule, Routes } from '@angular/router';

//import {appService} from './app.service'; // We are injecting the sevice inside the component , so commenting from here

const appRoutes: Routes = [
  { path: 'formdemo', component: FromDemoComponentComponent },
  { path: 'formdemo/:id',      component: FromDemoComponentComponent },
  {
    path: 'heroes',
    component: FromDemoComponentComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: MyNewComponentComponent }
];

@NgModule({
  declarations: [ //NOTE: To use or add component inside a model so that it can be used in components of that module
    AppComponent , MsgComponent, MyNewComponentComponent, FromDemoComponentComponent 
  ],
  imports: [
    BrowserModule,FormsModule ,HttpModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  //providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }

