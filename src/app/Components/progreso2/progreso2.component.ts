import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progreso2',
  templateUrl: './progreso2.component.html',
  styleUrls: ['./progreso2.component.css']
})
export class Progreso2Component {
  @Input() tit:string="";
}
