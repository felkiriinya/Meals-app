export class Meal {
    public edit: boolean
    constructor(public meal:string,
                public calories:string,
                public details:string
                ){
                    this.edit = true;
                }
}
