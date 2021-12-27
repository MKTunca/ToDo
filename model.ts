import { TodoItem } from "./todoitem";

export class Model{
    name:string;
    items:TodoItem[];

    constructor(){
        this.name="Mustafa";
        this.items=[
    {description:"kahvaltı",action:true},
    {description:"spor",action:true},
    {description:"alışveriş",action:false},
    {description:"ders",action:false}
        ];
    }
}
