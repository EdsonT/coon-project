import { Component, OnInit, Input } from '@angular/core';
import { Connector } from '../connectors.model';
@Component({
  selector: 'app-connectors-details',
  templateUrl: './connectors-details.component.html',
  styleUrls: ['./connectors-details.component.css']
})
export class ConnectorsDetailsComponent implements OnInit {
  
  @Input() connectorDetails:Connector;
  // name:string=this.connectorDetails.connectorName;

  constructor() { }

  ngOnInit() {
  }

}
