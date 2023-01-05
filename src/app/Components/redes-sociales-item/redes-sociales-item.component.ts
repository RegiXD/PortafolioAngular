import { Component, Input } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-redes-sociales-item',
  templateUrl: './redes-sociales-item.component.html',
  styleUrls: ['./redes-sociales-item.component.css']
})
export class RedesSocialesItemComponent {
  @Input() icono = {nombre: '', icon: faLinkedin, color: ''};
}
