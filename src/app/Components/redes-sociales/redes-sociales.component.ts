import { Component } from '@angular/core';
import  {  faInstagram  }  from  '@fortawesome/free-brands-svg-icons' ;
import  {  faFacebook  }  from  '@fortawesome/free-brands-svg-icons' ;
import  {  faWhatsapp  }  from  '@fortawesome/free-brands-svg-icons' ;
import  {  faTelegram  }  from  '@fortawesome/free-brands-svg-icons' ;
import  {  faLinkedin  }  from  '@fortawesome/free-brands-svg-icons' ;

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent {
  redes = [
    {nombre: 'instagram', icon: faInstagram, color: 'rgb(192, 104, 233)'},
    {nombre: 'facebook', icon: faFacebook, color: 'rgb(61, 104, 206)'},
    {nombre: 'linkedin', icon: faLinkedin, color: 'rgb(82, 135, 233)'},
    {nombre: 'whatsapp', icon: faWhatsapp, color: 'rgb(84, 206, 94)'},
    {nombre: 'telegram', icon: faTelegram, color: 'rgb(104, 184, 233)'}
  ]
}
