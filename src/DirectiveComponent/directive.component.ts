import { Component } from "@angular/core";

@Component({
    selector:'app-directive',
    templateUrl:'./directive.component.html',
    styleUrls:['./directive.component.css']
})

export class DirectiveComponent{
    public isDisplay:boolean = false;
    clickCounter:any[]=[];

    onToggle(){
        this.isDisplay= !this.isDisplay;
        this.clickCounter.push(Math.floor(new Date().getTime()/1000));
    }

}