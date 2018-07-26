import { Services } from "./services.model";
import { Auths } from "./Auths.model";


export class Connectors{
    public id:number;
    public name: string;
    public description: string;
    public logo: string;
    // public services:Services;
    public authId:number;
    constructor(
        id: number,
        name: string,
        description: string,
        logo: string,
        authId: number){
        this.id=id;
        this.name=name;
        this.description=description;
        this.logo=logo;
        // this.services=services;
        this.authId=authId;
    }
}