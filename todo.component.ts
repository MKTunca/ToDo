import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  displayAll:boolean=true;

  constructor() { }

   model=new Model();

   message:string="merhaba";

  //  addItem(inputItem:any){
  //    console.log(inputItem);
  //  }

  addItem(value:string){
    if(value!=""){

      let data={description:value,action:true};
       this.model.items.push(data);

       let items=[]
       items.push(data);
       
       localStorage.setItem("items",JSON.stringify(data));

      }
      else{
        alert("Bilgi giriniz");
      }
    }
    

  getName(){
    return this.model.name;
  }
  getItems(){

    if(this.displayAll){
      return this.model.items;
    }
    return this.model.items.filter(item=>item.action==false);
  }

  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }

}
