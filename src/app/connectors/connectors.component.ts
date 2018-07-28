import { Component, OnInit, Input } from '@angular/core';
import { ConnectorsServices } from '../Services/connectors.service';
import { Connectors } from '../Models/connectors.model';

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css'],
  providers:[ConnectorsServices]
})
export class ConnectorsComponent implements OnInit {
  selectedConnector:Connectors;
  @Input() menuOption:string;
  constructor(private connService:ConnectorsServices) { }

  ngOnInit() {
    this.connService.itemSelected.subscribe(
      (connector:Connectors)=>{
        this.selectedConnector=connector;
      }

    )
    console.log(this.selectedConnector);
  }
  // onConnectorsSelected(obtained:Connectors){
  //   this.connectorSelected=obtained;
  //   // console.log(obtained);
  // }

}
