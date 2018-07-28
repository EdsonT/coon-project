import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coon-Project';
  option;
  onConnectors(){
    this.option='connectors';
    console.log(this.option);
  }
  onAuths(){
    this.option='auths';
    console.log(this.option);
  }
  onServicesConnectors(){
    this.option='services';
    console.log(this.option);
  
  }
}
