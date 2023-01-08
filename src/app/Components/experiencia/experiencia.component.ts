import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  Experiencias = [
    {titulo: 'Vinería Reitano', subtitulo: 'Dueña de Despensa', descripcion: 'Reposición de mercadería, Administración de ganancias y gastos, Realización de trámites', fecha: 'Desde el 1 de Mayo de 2022', img: './assets/Imagenes/VineriaReitano.jpg'}
  ]
}
