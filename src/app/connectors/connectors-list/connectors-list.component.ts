import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Connectors } from '../../Models/connectors.model';
import { CONNECTORS } from '../../SampleData/mock-connectors';
import { ConnectorsServices } from '../../Services/connectors.service';


@Component({
  selector: 'app-connectors-list',
  templateUrl: './connectors-list.component.html',
  styleUrls: ['./connectors-list.component.css']
})
export class ConnectorsListComponent implements OnInit {

  connectors:Connectors[];
  constructor(private connServices:ConnectorsServices) { }
  ngOnInit() {
    this.connectors=this.connServices.getConnectors();
  }
 
}
