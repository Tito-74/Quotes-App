export class Quote {
    showAuthor: boolean;
    constructor(public id:number,public quot: string,public author: string,public name: string, public completeDate: Date){
        this.showAuthor=false;

    }
}