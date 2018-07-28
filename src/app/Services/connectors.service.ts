import { CONNECTORS } from "../SampleData/mock-connectors";
import { Connectors } from "../Models/connectors.model";
import { EventEmitter } from "../../../node_modules/@angular/core";

export class ConnectorsServices{
    connectors=CONNECTORS;
    itemSelected= new EventEmitter<Connectors>();
    getConnectors(){
        return this.connectors;
    }
    getSelected(i:number){
        // this.itemSelected=this.connectors[i];
        return this.connectors[i];
        }
    getItemSelected(){
        return this.itemSelected;

    }
}