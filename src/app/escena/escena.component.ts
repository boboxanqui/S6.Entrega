import { Component, Input } from '@angular/core';
import { ImatgeFonsService } from '../service/imatge-fons.service';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

constructor( private imatgeFons: ImatgeFonsService) {}

  @Input() arrHistoria: string[] = [];

  currentSentence: number = 0;

   llistatTxtImg: {txt: string, img: string}[] = this.imatgeFons.llistatTxtImg;

  bgcolor: string = 'green'

  prev(): void{
    if(this.currentSentence > 0){
      this.currentSentence--
    }     
  }

  next(): void{
    if(this.currentSentence < this.arrHistoria.length-1){
      this.currentSentence++
    }
  }

   mostrarImatge(): string{
     return this.llistatTxtImg[this.currentSentence].img
   }

   txtImatge(): string{
     return this.llistatTxtImg[this.currentSentence].txt
   }
}
