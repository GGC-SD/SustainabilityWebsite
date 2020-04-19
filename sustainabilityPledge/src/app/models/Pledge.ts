export class Pledge{
    category: string;
    question: string;
    answer: string;

    constructor(c: string, q: string, a: string){
        this.category = c;
        this.question = q;
        this.answer = a;
    }

}