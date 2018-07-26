export class Services{
    id:number;
    name:string;
    description:string;
    method:string;
    uri:string;
    pathParameters:string;
    queryParameters:string;
    headers:string;
    requestBody:string;
    connectorId:number;
    constructor(
        id:number,
        name:string,
        description:string,
        method:string,
        uri:string,
        pathParameters:string,
        queryParameters:string,
        headers:string,
        requestBody:string,
        connectorId:number
    ){
        this.id=id;
        this.name=name;
        this.description=description;
        this.method=method;
        this.uri=uri;
        this.pathParameters=pathParameters;
        this.queryParameters=queryParameters;
        this.headers=headers;
        this.requestBody=requestBody;    
        this.connectorId=connectorId;
    }
    
    

}