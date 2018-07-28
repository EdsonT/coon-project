import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Connectors } from '../../../Models/connectors.model';
import { ConnectorsServices } from '../../../Services/connectors.service';


@Component({
  selector: 'app-connector-item',
  templateUrl: './connector-item.component.html',
  styleUrls: ['./connector-item.component.css']
})
export class ConnectorItemComponent implements OnInit {
  @Input() connectorItem: Connectors;
  constructor(private connService:ConnectorsServices) { }

  ngOnInit() {
  }
  onItemSelected(){
    this.connService.itemSelected.emit(this.connectorItem);
    console.log(this.connectorItem);
  }

}
