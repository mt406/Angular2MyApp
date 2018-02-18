import { Component, OnInit } from '@angular/core';

import { User } from './../user.interface';
import { Theme } from './../theme.interface';

@Component({
  selector: 'app-from-demo-component',
  templateUrl: './from-demo-component.component.html',
  styleUrls: ['./from-demo-component.component.css']
})
export class FromDemoComponentComponent implements OnInit {

  constructor() { }

  public user: User;
  
  /* standing data goes here*/
  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
];
public roles = [
    { value: 'admin', display: 'Administrator' },
    { value: 'guest', display: 'Guest' },
    { value: 'custom', display: 'Custom' }
];
public themes: Theme[] = [
    { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
    { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
    { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
];
public topics = [
    { value: 'game', display: 'Gaming' },
    { value: 'tech', display: 'Technology' },
    { value: 'life', display: 'Lifestyle' },
];
public toggles = [
    { value: 'toggled', display: 'Toggled' },
    { value: 'untoggled', display: 'UnToggled' },
];
  /* end standing data */


  ngOnInit() {
      // initialize user model here
    this.user = {
      name: '',
      gender: this.genders[0].value, // default to Female
      role: null,
      theme: this.themes[0], // default to dark theme
      isActive: false,
      toggle: this.toggles[1].value, // default to untoggled
      topics: [this.topics[1].value] // default to Technology
  }
  }

  

  public save(isValid: boolean, f: User) {
      console.log(f);
  }

}
