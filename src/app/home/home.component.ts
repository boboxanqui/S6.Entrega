import { Component } from '@angular/core';
import { ImatgeFonsService } from '../service/imatge-fons.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private imatgesFons: ImatgeFonsService) {}
  
  llistatTxtImg: {txt: string, img: string}[] = this.imatgesFons.llistatTxtImg;


  historia: string[] = [

    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
  
    "L'heroi va decidir travessar la porta que el portava a casa",
  
    "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
  
  ]

  benvinguda: boolean = true;


  acabarBenvinguda(): void{
    this.benvinguda = false;
  }

}
