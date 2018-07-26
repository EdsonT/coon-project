export class Auths{
    id:number;
    name:string;
    protocol:string;
    grantType:string;
    authorizationUri:string;
    accessTokenUri:string;
    clientId:string;
    clientSecret:string;
    redirectUri:string;
    status:string;
    scope:string;
    constructor(
        id: number,
        name: string,
        protocol: string,
        grantType: string,
        authorizationUri: string,
        accessTokenUri: string,
        clientId: string,
        clientSecret: string,
        redirectUri: string,
        status: string,
        scope: string){
        this.id=id;
        this.name = name;
        this.protocol = protocol;
        this.grantType = grantType;
        this.authorizationUri = authorizationUri;
        this.accessTokenUri = accessTokenUri;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectUri = redirectUri;
        this.status = status;
        this.scope = scope;
    }  
}