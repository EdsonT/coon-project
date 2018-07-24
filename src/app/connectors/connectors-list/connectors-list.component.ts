import { Component, OnInit } from '@angular/core';
import { Connector } from '../connectors.model';

@Component({
  selector: 'app-connectors-list',
  templateUrl: './connectors-list.component.html',
  styleUrls: ['./connectors-list.component.css']
})
export class ConnectorsListComponent implements OnInit {
  connectors: Connector[]=[
    new Connector('Facebook Connector','This is a sample connector','GET','www.facebook.com','https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
