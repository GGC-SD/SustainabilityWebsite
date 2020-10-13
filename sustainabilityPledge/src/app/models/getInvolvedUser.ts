export class getInvolvedUser{
    firstName: string;
    lastName: string;
    phone: string;
    emailAddress: string;

    constructor(fn: string, ln: string, p:string, ea: string){
        this.firstName = fn;
        this.lastName = ln;
        this.phone = p;
        this.emailAddress = ea;
    }
}