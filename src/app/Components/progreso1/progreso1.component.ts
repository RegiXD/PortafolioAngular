import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progreso1',
  templateUrl: './progreso1.component.html',
  styleUrls: ['./progreso1.component.css']
})
export class Progreso1Component {
  @Input() tit:string="";
}
