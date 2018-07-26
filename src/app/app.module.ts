import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatCard, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule} from '@angular/material';
import { MatCheckboxModule} from '@angular/material/checkbox'


import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { ConnectorsComponent } from './connectors/connectors.component';
import { ConnectorsListComponent } from './connectors/connectors-list/connectors-list.component';
import { ConnectorsDetailsComponent } from './connectors/connectors-details/connectors-details.component';
import { ConnectorItemComponent } from './connectors/connectors-list/connector-item/connector-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectorsComponent,
    ConnectorsListComponent,
    ConnectorsDetailsComponent,
    ConnectorItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
