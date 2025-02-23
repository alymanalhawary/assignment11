import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 hidden:boolean=true;
 imgSrc:string[]=[
  'images/poert1 (1).png',
  'images/port2 (1).png',
  'images/port3 (1).png',
  'images/poert1 (1).png',
  'images/port2 (1).png',
  'images/port3 (1).png'
 ];
 linkimg:string='';
hideimg(eletarget:EventTarget|null ,imgRef:HTMLImageElement):void{
  if(eletarget==imgRef){
    return;
  }
  else{
    this.hidden=true;
  }
}

}
