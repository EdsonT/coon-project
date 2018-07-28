import { Component, OnInit, Input } from '@angular/core';
import { Connectors } from '../../Models/connectors.model';
@Component({
  selector: 'app-connectors-details',
  templateUrl: './connectors-details.component.html',
  styleUrls: ['./connectors-details.component.css']
})
export class ConnectorsDetailsComponent implements OnInit {
  
  @Input() connectorDetails:Connectors;
  // name:string=this.connectorDetails.connectorName;

  constructor() { }

  ngOnInit() {
  }

}
