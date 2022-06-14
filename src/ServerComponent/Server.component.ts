import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./Server.component.html',
    styleUrls:['./Server.component.css']
})


export class ServerComponent{
public serverId:number=10;
public serverName:string = 'old Server';
public canAddNewServer:boolean = false;
userInput:string = '';

constructor(){
    setTimeout(()=>{
        this.canAddNewServer = true;
    },2000)
}

addNewServer(){
    this.serverName = this.userInput;
}

getServerName(event:Event){
    this.userInput= (<HTMLInputElement>event.target).value;
}
}