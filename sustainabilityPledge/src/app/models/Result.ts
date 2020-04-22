export class Result{
    pledgeCount: number = 0;
    dontPledgeCount: number = 0;
    alreadyPledgeCount: number = 0;

    constructor(){}

    public setPledge(){
        this.pledgeCount++;
    }

    public getPledge():number{
        return this.pledgeCount;
    }

    public setDontPledge(){
        this.dontPledgeCount++;
    }

    public getDontPledge():number{
        return this.dontPledgeCount;
    }

    public setAlreadyPledge(){
        this.alreadyPledgeCount++;
    }

    public getAlreadyPledged():number{
        return this.alreadyPledgeCount;
    }
}