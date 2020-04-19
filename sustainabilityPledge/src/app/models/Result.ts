export class Result{
    pledgeCount: number = 0;
    dontPledgeCount: number = 0;
    alreadyPledgeCount: number = 0;

    constructor(){}

    setPledge(){
        this.pledgeCount++;
    }

    getPledge(){
        return this.pledgeCount;
    }

    setDontPledge(){
        this.dontPledgeCount++;
    }

    getDontPledge(){
        return this.dontPledgeCount;
    }

    setAlreadyPledge(){
        this.alreadyPledgeCount++;
    }

    getAlreadyPledged(){
        return this.alreadyPledgeCount;
    }
}