import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Connector } from '../../connectors.model';

@Component({
  selector: 'app-connector-item',
  templateUrl: './connector-item.component.html',
  styleUrls: ['./connector-item.component.css']
})
export class ConnectorItemComponent implements OnInit {
  @Input() connectorItem: Connector;
  @Output() selectedItem = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onItemSelected(){
    this.selectedItem.emit();
    // console.log(this.selectedItem);
  }

}
