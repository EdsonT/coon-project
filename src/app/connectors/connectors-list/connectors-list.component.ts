import { Component, OnInit } from '@angular/core';
import { Connector } from '../connectors.model';

@Component({
  selector: 'app-connectors-list',
  templateUrl: './connectors-list.component.html',
  styleUrls: ['./connectors-list.component.css']
})
export class ConnectorsListComponent implements OnInit {
  connectors: Connector[]=[
    new Connector('Google Connector','This is a sample connector','GET','www.facebook.com','https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'),
    new Connector('Facebook Connector','This is a sample connector','GET','www.facebook.com','https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png'),
    new Connector('Twitter Connector','This is a sample connector','GET','www.facebook.com','https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg'),
    new Connector('Twitch Connector','This is a sample connector','GET','www.facebook.com','https://cdn.iconscout.com/public/images/icon/free/png-512/twitch-logo-376c6b40ea97c37d-512x512.png'),
    new Connector('Twitch Connector','This is a sample connector','GET','www.facebook.com','https://cdn.iconscout.com/public/images/icon/free/png-512/twitch-logo-376c6b40ea97c37d-512x512.png')

  ]
  constructor() { }

  ngOnInit() {
  }

}
