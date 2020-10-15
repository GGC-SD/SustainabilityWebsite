export class getInvolvedUser{
    name: string;
    phone: string;
    emailAddress: string;

    constructor(n:string, p:string, ea: string){
        this.name= n;
        this.phone = p;
        this.emailAddress = ea;
    }
}