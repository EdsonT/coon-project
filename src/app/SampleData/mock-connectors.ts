import { Connectors } from "../Models/connectors.model";

export const CONNECTORS:Connectors[]=[    
    {   id:21,
        name:'Google Connector',
        description:'This connector contains all the necessary methods to connect to google services',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
        authId:1},
    {   id:22,
        name:'Facebook Connector',
        description:'This connector will store all the methods to use facebook',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/240px-Facebook_logo_%28square%29.png',
        authId:1},
    {   id:23,
        name:'Twitter',
        description:'This contains all the methods endpoints fron connecting to Twitter service',
        logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/9/9f/Twitter_bird_logo_2012.svg/154px-Twitter_bird_logo_2012.svg.png',
        authId:1},
    {   id:24,
        name:'Twitch',
        description:'This will connect with twitch and use its endpoints',
        logo: 'https://web.twitchapp.net/newport/cdn/assets/images/social/twitter-card.jpg',
        authId:1},

];