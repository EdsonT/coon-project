export class Connector{
    public connectorName: string;
    public description: string;
    public method: string
    public uri: string;
    public logo: string;


    constructor(
        connectorName:string,
        description:string,
        method:string,
        uri:string,
        logo:string, ){
        this.connectorName=connectorName;
        this.description=description;
        this.method=method;
        this.uri=uri;
        this.logo=logo;
    }
}