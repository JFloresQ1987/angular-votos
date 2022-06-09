import { Component } from '@angular/core';
import { Link } from './models/link'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links:Link[];

  constructor(){
    this.links=[
      new Link('Google','www.google.com',100),
      new Link('Youtube','www.youtube.com',50),
      new Link('Facebook','www.facebook.com',90)
    ];
  }

  addLink(title:HTMLInputElement,link:HTMLInputElement){
    this.links.push(new Link(title.value,link.value));
    title.value='';
    link.value='';
    return false;
  }
}
