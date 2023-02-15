import { Component } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pass=faLock;
  value:boolean=false;
  cerrarvalue:boolean=false;

  Value(e:boolean) {
    this.value=e;
    console.log(this.value);
  }

  Cerrar() {
      this.value=false;
      console.log("value cambio a: " + this.value);
  }
}
