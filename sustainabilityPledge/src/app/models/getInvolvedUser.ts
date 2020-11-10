export class GetInvolvedUser{
    name: string;
    phone: string;
    emailAddress: string;

    constructor(name :string, phone :string, emailAddress: string){
        this.name= name;
        this.phone = phone;
        this.emailAddress = emailAddress;
    }
    
}