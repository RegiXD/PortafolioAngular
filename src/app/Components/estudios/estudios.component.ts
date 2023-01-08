import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {
  @Input() estudios = [
    {titulo: 'Curso #YoProgramo', subtitulo: 'Programación Web FullStack', descripcion: 'Estoy en proceso de terminar el curso de programación web de Argentina Programa de #YoProgramo en el cual adquiero los conocimientos con los que pude realizar este proyecto de mi portafolio', fecha: 'En curso', img: './assets/Imagenes/logo_del_curso.png'},
    {titulo: 'UNL', subtitulo: 'Ingeniería en Informática', descripcion: 'Promosioné primer año, permitiéndome hacer el segundo en el cual dejé para dedicarme de lleno a la programación web', fecha: 'hace 1 año', img: './assets/Imagenes/UNL.png'},
    {titulo: 'IPET Juan XXIII', subtitulo: 'Técnica en Electrónica', descripcion: 'Terminé la escuela secundaria técnica con el segundo mejor promedio recibiendo el título de técnica el Electrónica. En dicha escuela conocí la programación, arrancando por primera vez con C y programando pic y Arduino', fecha: 'Hace 4 años', img: './assets/Imagenes/JuanXXIII.png'}
  ];
}
