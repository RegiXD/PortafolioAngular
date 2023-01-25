import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  @Input() proyectos = [
    {titulo: 'Mi Primer página Web', descripcion: 'Fue realizada únicamente con HTML y CSS', img: './assets/Imagenes/MiPrimerPagWeb.jpg', link: '#'},

    {titulo: 'Prubas con Vue y Vuetify', descripcion: 'En esta página se encuentran diferentes secciones en las que probé diferentes componentes de Vuetify', img: './assets/Imagenes/PruebasconVuetify.jpg', link: '#'},

    {titulo: 'Calculadora', descripcion: 'Proyecto de calculadora. Fue realizado como capacitación para el ingreso a una empresa Paranaense (ETsol)', img: './assets/Imagenes/Calculadora.jpg', link: '#'}
  ];
}
