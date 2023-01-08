import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  @Input() estudios = [
    {titulo: 'Mi Primer página Web', subtitulo: 'Fue realizada únicamente con HTML y CSS', descripcion: '', fecha: '', img: './assets/Imagenes/MiPrimerPagWeb.jpg'},

    {titulo: 'UNL', subtitulo: 'Ingeniería en Informática', descripcion: 'Promosioné primer año, permitiéndome hacer el segundo en el cual dejé para dedicarme de lleno a la programación web', fecha: 'hace 1 año', img: './assets/Imagenes/UNL.png'},

    {titulo: 'IPET Juan XXIII', subtitulo: 'Técnica en Electrónica', descripcion: 'Terminé la escuela secundaria técnica con el segundo mejor promedio recibiendo el título de técnica el Electrónica. En dicha escuela conocí la programación, arrancando por primera vez con C y programando pic y Arduino', fecha: 'Hace 4 años', img: './assets/Imagenes/JuanXXIII.png'}
  ];
}
