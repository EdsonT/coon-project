import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatCard, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule} from '@angular/material';
import { MatCheckboxModule} from '@angular/material/checkbox'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { ConnectorsComponent } from './connectors/connectors.component';
import { ConnectorsListComponent } from './connectors/connectors-list/connectors-list.component';
import { ConnectorsDetailsComponent } from './connectors/connectors-details/connectors-details.component';
import { ConnectorItemComponent } from './connectors/connectors-list/connector-item/connector-item.component';
import { AuthsComponent } from './auths/auths.component';
import { ServicesConnectorsComponent } from './services-connectors/services-connectors.component';

const appRoutes:Routes=[
  // {path:'', component:ConnectorsDetailsComponent},
  {path:'connectors', component:ConnectorsDetailsComponent},
  {path:'services', component:ServicesConnectorsComponent},
  {path:'auths',component:AuthsComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectorsComponent,
    ConnectorsListComponent,
    ConnectorsDetailsComponent,
    ConnectorItemComponent,
    AuthsComponent,
    ServicesConnectorsComponent
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
    MatGridListModule,
    RouterModule.forRoot(appRoutes) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
