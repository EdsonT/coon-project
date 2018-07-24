import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { MatCheckboxModule} from '@angular/material/checkbox'


import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { ConnectorsComponent } from './connectors/connectors.component';
import { ConnectorsListComponent } from './connectors/connectors-list/connectors-list.component';
import { ConnectorsDetailsComponent } from './connectors/connectors-details/connectors-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectorsComponent,
    ConnectorsListComponent,
    ConnectorsDetailsComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
