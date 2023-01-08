import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grupo-tarjetas',
  templateUrl: './grupo-tarjetas.component.html',
  styleUrls: ['./grupo-tarjetas.component.css']
})
export class GrupoTarjetasComponent {
  @Input() data: any = [];
}
