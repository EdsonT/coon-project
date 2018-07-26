import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Connector } from '../connectors.model';
import { CONNECTORS } from '../../SampleData/mock-connectors';


@Component({
  selector: 'app-connectors-list',
  templateUrl: './connectors-list.component.html',
  styleUrls: ['./connectors-list.component.css']
})
export class ConnectorsListComponent implements OnInit {

  connectors=CONNECTORS;
  @Output() listSelected=new EventEmitter<Connector>();
  constructor() { }

  ngOnInit() {
  }
  onConnectorListSelected(selectedConnector:Connector){
    this.listSelected.emit(selectedConnector);
    // console.log(selectedConnector);
  }
}
