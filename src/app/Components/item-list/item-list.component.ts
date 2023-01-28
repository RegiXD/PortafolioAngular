import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() dato = {titulo: '', subtitulo: '', descripcion: '', fecha: '', img: ''};
  posEdit = {'float': 'right'};
  posClose = {'margin-right': '-10px'};
}
