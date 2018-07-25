import { Component, OnInit } from '@angular/core';
import { Connector } from './connectors.model';

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css']
})
export class ConnectorsComponent implements OnInit {
  connectorSelected:Connector;
  constructor() { }

  ngOnInit() {
  }
  onConnectorsSelected(obtained:Connector){
    this.connectorSelected=obtained;
    // console.log(obtained);
  }

}
