import { Component, Input } from '@angular/core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-btn-circl',
  templateUrl: './btn-circl.component.html',
  styleUrls: ['./btn-circl.component.css']
})
export class BtnCirclComponent {
  pencil = faPen;
  cruz = faTimes;
  visible = false;
  @Input() posicion:any;
  @Input() tipo:string = "";
}
