import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() dato = {titulo: '', subtitulo: '', descripcion: '', fecha: '', img: ''};
  posEdit = {'float': 'right', 'box-shadow': '2px -2px 10px rgb(0 0 0 / 66%)'};
  posClose = {'margin-right': '-10px', 'box-shadow': '2px -2px 10px rgb(0 0 0 / 66%)'};
}
